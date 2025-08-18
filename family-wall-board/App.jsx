import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";

export default function App() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [members, setMembers] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPanel, setShowPanel] = useState(false);

  const [newEvent, setNewEvent] = useState({
    time: "",
    description: "",
    priority: "normal",
    member: "",
  });

  const [newMember, setNewMember] = useState("");

  const handleAddMember = () => {
    if (!newMember.trim()) return;
    setMembers([...members, newMember.trim()]);
    setNewMember("");
  };

  const handleAddEvent = () => {
    if (!newEvent.description || !newEvent.time || !newEvent.member) return;
    const event = {
      id: Date.now(),
      date: selectedDate,
      completed: false,
      ...newEvent,
    };
    setEvents([...events, event]);
    setNewEvent({ time: "", description: "", priority: "normal", member: "" });
  };

  const toggleComplete = (id) => {
    setEvents(
      events.map((e) => (e.id === id ? { ...e, completed: !e.completed } : e))
    );
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const today = format(new Date(), "yyyy-MM-dd");
  const todaysEvents = events.filter((e) => e.date === today);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-white to-purple-200 flex flex-col p-6 font-sans">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-indigo-700 drop-shadow-lg tracking-wide">
        🏡 Family Wall Board
      </h1>

      <div className="flex flex-1 gap-6">
        {/* Calendar Section */}
        <div className="flex-1 bg-white/40 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/50">
          <Calendar
            onChange={(d) => {
              const picked = format(d, "yyyy-MM-dd");
              setSelectedDate(picked);
              setShowPanel(true);
            }}
            value={date}
            tileClassName={({ date }) => {
              const dateStr = format(date, "yyyy-MM-dd");
              const dayEvents = events.filter((e) => e.date === dateStr);
              if (dayEvents.length > 0) {
                return "event-day";
              }
              return "";
            }}
          />
        </div>

        {/* Side Panel */}
        {showPanel && (
          <div className="w-1/4 bg-white/70 backdrop-blur-2xl p-6 rounded-3xl shadow-2xl border border-white/50 animate-slide-in">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">
              📅 {selectedDate}
            </h2>

            {/* Add Member */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                👥 Add Family Member
              </h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter name"
                  className="border p-2 rounded-xl flex-1 focus:ring-2 focus:ring-indigo-400 outline-none"
                  value={newMember}
                  onChange={(e) => setNewMember(e.target.value)}
                />
                <button
                  onClick={handleAddMember}
                  className="bg-indigo-500 text-white px-3 rounded-xl hover:bg-indigo-600 transition"
                >
                  ➕
                </button>
              </div>
              {members.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {members.map((m) => (
                    <span
                      key={m}
                      className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm shadow-sm"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Add Event */}
            <select
              className="border p-2 rounded-xl w-full mb-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              value={newEvent.member}
              onChange={(e) =>
                setNewEvent({ ...newEvent, member: e.target.value })
              }
            >
              <option value="">Select member</option>
              {members.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>

            <input
              type="time"
              className="border p-2 rounded-xl w-full mb-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              value={newEvent.time}
              onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
            />
            <input
              type="text"
              placeholder="Event description"
              className="border p-2 rounded-xl w-full mb-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({ ...newEvent, description: e.target.value })
              }
            />
            <select
              className="border p-2 rounded-xl w-full mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
              value={newEvent.priority}
              onChange={(e) =>
                setNewEvent({ ...newEvent, priority: e.target.value })
              }
            >
              <option value="low">🟢 Low</option>
              <option value="normal">🟡 Normal</option>
              <option value="high">🔴 High</option>
            </select>

            <button
              onClick={handleAddEvent}
              className="bg-indigo-600 text-white w-full py-2 rounded-2xl hover:bg-indigo-700 transition shadow-lg"
            >
              ➕ Add Event
            </button>

            {/* Events for this Date */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">⏳ Pending</h3>
              <ul className="space-y-2">
                {events
                  .filter((e) => e.date === selectedDate && !e.completed)
                  .map((e) => (
                    <li
                      key={e.id}
                      className="p-3 rounded-xl flex justify-between items-center bg-gradient-to-r from-white to-gray-100 shadow hover:scale-[1.02] transition"
                    >
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={e.completed}
                          onChange={() => toggleComplete(e.id)}
                          className="accent-indigo-500"
                        />
                        <span>
                          ⏰ {e.time} – {e.description}{" "}
                          <span
                            className={`ml-1 text-xs px-2 py-0.5 rounded-full ${
                              e.priority === "high"
                                ? "bg-red-100 text-red-600"
                                : e.priority === "normal"
                                ? "bg-yellow-100 text-yellow-600"
                                : "bg-green-100 text-green-600"
                            }`}
                          >
                            {e.priority}
                          </span>
                        </span>
                      </label>
                      <button
                        onClick={() => deleteEvent(e.id)}
                        className="text-red-400 hover:text-red-600"
                      >
                        ❌
                      </button>
                    </li>
                  ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-700 mt-6">✅ Completed</h3>
              <ul className="space-y-2">
                {events
                  .filter((e) => e.date === selectedDate && e.completed)
                  .map((e) => (
                    <li
                      key={e.id}
                      className="p-3 rounded-xl flex justify-between items-center bg-green-50 line-through text-gray-500"
                    >
                      ⏰ {e.time} – {e.description}
                      <button
                        onClick={() => deleteEvent(e.id)}
                        className="text-red-400 hover:text-red-600"
                      >
                        ❌
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}

        {/* Agenda Section */}
        <div className="flex-1 bg-white/40 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/50">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">
            📌 Today's Agenda – {today}
          </h2>
          {members.length === 0 && (
            <p className="text-gray-500 italic">Add family members to see agenda</p>
          )}
          {members.map((m) => (
            <div key={m} className="mb-6">
              <h3 className="font-bold text-indigo-500 text-lg">{m}</h3>
              <ul className="ml-4 mt-2 space-y-1">
                {todaysEvents.filter((e) => e.member === m && !e.completed)
                  .length === 0 ? (
                  <li className="text-gray-400 text-sm">No pending events</li>
                ) : (
                  todaysEvents
                    .filter((e) => e.member === m && !e.completed)
                    .map((e) => (
                      <li key={e.id} className="text-sm">
                        ⏰ {e.time} – {e.description} [{e.priority}]
                      </li>
                    ))
                )}

                {todaysEvents.filter((e) => e.member === m && e.completed).length >
                  0 && (
                  <li className="text-xs text-green-600 mt-2">
                    ✅{" "}
                    {
                      todaysEvents.filter(
                        (e) => e.member === m && e.completed
                      ).length
                    }{" "}
                    done
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Extra calendar styling */}
      <style>
        {`
          .react-calendar {
            border: none;
            width: 100%;
            background: transparent;
            font-family: 'Inter', sans-serif;
          }
          .react-calendar__tile {
            padding: 1rem;
            border-radius: 12px;
            transition: all 0.2s;
          }
          .react-calendar__tile:hover {
            background: rgba(99, 102, 241, 0.2);
            transform: scale(1.05);
          }
          .react-calendar__tile--active {
            background: #6366f1 !important;
            color: white !important;
            border-radius: 12px;
          }
          .event-day {
            background: rgba(234, 179, 8, 0.25);
            border-radius: 12px;
          }
          @keyframes slide-in {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in {
            animation: slide-in 0.3s ease-out;
          }
        `}
      </style>
    </div>
  );
}
