const DashboardPage = () => {
  const stats = [
    {
      title: "Users",
      value: "1,245",
      icon: "👥",
    },
    {
      title: "Revenue",
      value: "$12,430",
      icon: "💰",
    },
    {
      title: "Orders",
      value: "320",
      icon: "📦",
    },
    {
      title: "Visitors",
      value: "8,421",
      icon: "📈",
    },
  ];

  const activities = [
    {
      title: "New user registered",
      time: "2 minutes ago",
      status: "New",
    },
    {
      title: "Payment received",
      time: "10 minutes ago",
      status: "Paid",
    },
    {
      title: "Server updated",
      time: "1 hour ago",
      status: "Update",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      

      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Welcome back, Admin 👋
          </p>
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-zinc-600 hover:-translate-y-1 transition duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-3">
                  {item.value}
                </h2>
              </div>

              <div className="text-5xl">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

  
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">

 
        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">
              Recent Activity
            </h2>

            <button className="text-sm text-slate-400 hover:text-white transition">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {activities.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-zinc-950 rounded-2xl p-4 border border-zinc-800 hover:border-zinc-700 transition"
              >
                <div>
                  <h3 className="font-medium">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 mt-1">
                    {item.time}
                  </p>
                </div>

                <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
