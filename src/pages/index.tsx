import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (input) {
      setTodos(todos => [...todos, input]);
      setInput('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form from submitting
      handleAddTodo();
    }
  };

  const handleRemoveTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <main className="main-content bg-primary-background-color text-white min-h-screen">
      <Helmet>
        <title>Lost Mokokos</title>
        <meta name="description" content="Lost Ark Information for all your needs" />
      </Helmet>
      <h1 className="text-4xl text-center mt-4 mb-4">Lost Mokokos</h1>
      <div className="m-5 bg-secondary-background-color p-5 rounded-lg">
        <h2 className="text-lg text-primary-text-color">Todo List</h2>
        <form className="flex gap-2 mb-4" onSubmit={(e) => { e.preventDefault(); handleAddTodo(); }}>
          <input
            type="text"
            className="flex-grow p-2 border rounded bg-primary-background-color text-white"
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="bg-primary-background-selection-color text-white px-4 py-2 rounded"
            type="submit"
          >
            Add
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center">
              {todo}
              <button className="text-red-500" onClick={() => handleRemoveTodo(index)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="m-5 bg-secondary-background-color p-5 rounded-lg">
        <h1 className='text-primary-text-color text-center text-[48px]'>Please do not Remove Thaemine or Echnida Raids or you will get incorrect Calculations. Working on a Fix!</h1>
        <hr className="my-8" />
        <h2 className='text-primary-text-color text-center text-[48px]'>Boss Rewards for Box and Clear are the same so they are not added twice</h2>
        <Timeline position="alternate-reverse">
          {[
            "Updated Manage Raids styling to work properly for Active, Inactive and Hover over Raid Chips and Help Text",
            "Added Basic HomePage for Updates and Communication",
            "Todo List is only temporary for fun will probably remove it later or revamp it",
            "Updated Total Gold Row in Gold Calculator to Be Visible Always on the Bottom, made it mobile friendly",
            "Removing Page Refresh when you add something to Todo List",
            "Updated Communication Text to be More User Friendly with a Timeline Instead of a List",
            "Working on Thaemine and Echnida Removal Fix, Most Likely rewriting The Raid Calculator from scratch to be more efficient and easier to maintain",
            "Added a New Row called Additional Gold to Add your own Gold to the Total Gold Calculation based on each Individual Character",
            "Fixed Issue with text cutting into Checkbox's for labels on Smaller Windows",
            "Adding Show Differences Icon on Raids instead of doing mouse hover to be more mobile friendly",
            "Updating Gold Formatting to your currency locale formatting",
            "Lined up Additional Gold with Total Gold for better readability",
            "Updated Raids Data to Include Boss Drops Upto Echnida",
            "Working on fixing totals for double boss rewards stacking on each other in raids Page",
          ].reverse().map((content, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className="p-3 bg-primary-background-color text-primary-text-color">
                  <Typography>{content}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </main>
  );
}
