import { useEffect, useState } from "react";
import { ScrollArea } from "../../Components/scroll-area";
import { Link } from "react-router-dom";
import DocsNavbar from "../../Components/DocsNavbar";

function DocsLayout() {
  const [data, setData] = useState([]);
  const [selectedList, setSelectedList] = useState([]);

  // Track both subject and mini-subject for unique identification
  const [activeItem, setActiveItem] = useState({
    subject: "",
    miniSubject: "",
  });

  // Store videos by miniSubject key
  const [videosState, setVideosState] = useState({});

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.mushihost.com/demo/api.php")
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData);
        const defaultItem = fetchedData.find(
          (item) => item["mini-subject"] === "Introduction"
        );
        if (defaultItem) {
          setSelectedList(defaultItem["list-id"]);
          setActiveItem({
            subject: defaultItem.Subject,
            miniSubject: defaultItem["mini-subject"],
          });
        }
        setLoading(false);
      });
  }, []);

  const handleMiniSubjectClick = (subject, miniSubject) => {
    setActiveItem({
      subject: subject,
      miniSubject: miniSubject,
    });

    const content = data.find(
      (item) => item.Subject === subject && item["mini-subject"] === miniSubject
    );

    if (content) setSelectedList(content["list-id"]);
    setSidebarOpen(false); // Auto-close on mobile
  };

  const handleVideoClick = (video, index) => {
    // Create a unique key for this mini-subject
    const key = `${activeItem.subject}-${activeItem.miniSubject}`;

    // Update videos state with this selection for current mini-subject
    setVideosState({
      ...videosState,
      [key]: {
        title: video,
        url: `https://www.youtube.com/embed/placeholder-video-id-${index}`, // Replace with actual URL
      },
    });
  };

  // Get the current video for the active mini-subject
  const getCurrentVideo = () => {
    const key = `${activeItem.subject}-${activeItem.miniSubject}`;
    return videosState[key] || null;
  };

  const groupedSubjects = data.reduce((acc, curr) => {
    if (!acc[curr.Subject]) acc[curr.Subject] = [];
    acc[curr.Subject].push(curr);
    return acc;
  }, {});

  return (
    <>
      <div className="bg-white border border-b-3">
        <div className="container ">
          <DocsNavbar />
        </div>
      </div>
      <div className="container flex h-screen overflow-hidden relative mt-2">
        {/* Hamburger for mobile */}
        <button
          className="absolute top-4 left-4 z-50 block md:hidden text-gray-700"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
          fixed z-50 top-0 left-0 h-full w-64 bg-white border-r transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:block
        `}
        >
          <ScrollArea className="h-full px-4 py-6">
            <nav className="space-y-4 text-sm">
              {Object.entries(groupedSubjects).map(([subject, items]) => (
                <div key={subject}>
                  <h2 className="font-semibold mb-1">{subject}</h2>
                  <ul className="">
                    {items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() =>
                            handleMiniSubjectClick(
                              subject,
                              item["mini-subject"]
                            )
                          }
                          className={`
                          text-left w-full px-3 py-1.5 rounded-sm transition-all
                          border-l-2
                          ${
                            activeItem.subject === subject &&
                            activeItem.miniSubject === item["mini-subject"]
                              ? "text-blue-700 border-blue-700 font-semibold"
                              : "text-gray-700 border-gray-200"
                          }
                        `}
                        >
                          {item["mini-subject"]}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </ScrollArea>
        </aside>
        <ScrollArea className="w-full h-full px-4 py-6">
          {/* Main Content */}
          <main className="flex-1  px-6 py-8">
            <h1 className=" flex items-center justify-start mb-4  text-gray-500">
              {activeItem.subject}

              <span>
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>

              {activeItem.miniSubject}
            </h1>

            {/* Video Player Section - Show when a video is selected for the current mini-subject */}
            {getCurrentVideo() && (
              <div className="mb-6">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden ">
                  <iframe
                    src={getCurrentVideo().url}
                    title={getCurrentVideo().title}
                    className="w-[800px] h-[500px]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h2 className="text-xl font-semibold mt-3">
                  {getCurrentVideo().title}
                </h2>
              </div>
            )}

            <ul className="list-disc space-y-2">
              {selectedList.map((video, index) => {
                const currentVideo = getCurrentVideo();
                const isPlaying = currentVideo && currentVideo.title === video;

                return (
                  <li
                    key={index}
                    onClick={() => handleVideoClick(video, index)}
                    className="relative group border-gray-200 rounded-full p-4 flex items-center justify-between transition-colors duration-300 border-2 border-opacity-50 hover:border-black hover:shadow-xl cursor-pointer"
                  >
                    <span className="text-black font-medium">{video}</span>
                    <span className="text-blue-500">
                      {isPlaying ? "▶️ Playing" : "▶️ Play"}
                    </span>
                  </li>
                );
              })}
            </ul>
          </main>
        </ScrollArea>
      </div>
    </>
  );
}

export default DocsLayout;
