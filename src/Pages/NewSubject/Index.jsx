import { useEffect, useState } from 'react';
import { ScrollArea } from '../../Components/scroll-area';
import { Link } from 'react-router-dom';

function DocsLayout() {
  const [data, setData] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  const [activeMiniSubject, setActiveMiniSubject] = useState('Introduction');
  const [sidebarOpen, setSidebarOpen] = useState(false);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.mushihost.com/demo/api.php')
      .then(res => res.json())
      .then(fetchedData => {
        setData(fetchedData);
        const defaultList = fetchedData.find(item => item["mini-subject"] === 'Introduction');
        if (defaultList) setSelectedList(defaultList["list-id"]);
        setLoading(false)
      });
  }, []);

  const handleMiniSubjectClick = (miniSubject) => {
    setActiveMiniSubject(miniSubject);
    const content = data.find(item => item["mini-subject"] === miniSubject);
    if (content) setSelectedList(content["list-id"]);
    setSidebarOpen(false); // Auto-close on mobile
  };

  const groupedSubjects = data.reduce((acc, curr) => {
    if (!acc[curr.Subject]) acc[curr.Subject] = [];
    acc[curr.Subject].push(curr);
    return acc;
  }, {});

  return (
    <div className=" container flex h-screen overflow-hidden relative">
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
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 md:block
        `}
      >
        <ScrollArea className="h-full px-4 py-6">
          <nav className="space-y-4 text-sm">
            {Object.entries(groupedSubjects).map(([subject, items]) => (
              <div key={subject}>
                <h2 className="font-semibold mb-1">{subject}</h2>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleMiniSubjectClick(item["mini-subject"])}
                        className={`
                          text-left w-full px-3 py-1.5 rounded-sm transition-all
                          border-l-2
                          ${activeMiniSubject === item["mini-subject"]
                            ? "text-black border-black font-semibold "
                            : "text-gray-700 border-gray-200 "}
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

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-6 py-8 ">
        <h1 className="text-3xl font-bold mb-4">{activeMiniSubject}</h1>
        <ul className="list-disc  space-y-2">
          


           {selectedList.map((video, index) => (

            <li
              key={index}
              className="relative group border-gray-200 rounded-full p-4 flex items-center justify-between  transition-colors duration-300 border-2  border-opacity-50 hover:border-black hover:shadow-xl"
              >
              <span className="text-black font-medium">{video}</span>
              <span className="text-black">🔒</span>
            </li>
          ))}

        </ul>
      </main>
    </div>
  );
}

export default DocsLayout;
