import React, { useState } from 'react';
 // Ensure the path to your CSS file is correct

export default function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [showQuickResponses, setShowQuickResponses] = useState(true);
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
          sendMessage(input);
          e.preventDefault();
        }
    };

    const quickResponse = (text) => {
        sendMessage(text);
        setShowQuickResponses(false);
    };

    const sendMessage = async (message) => {
        setLoading(true);
        const trimmedMessage = message.trim();
        if (!trimmedMessage){
            setLoading(false);
            return;
        } 

        setShowQuickResponses(false);

        const newMessage = { id: Date.now(), text: trimmedMessage, sender: 'user' };
        setMessages(messages => [...messages, newMessage]);
        setInput(''); // Clear input field after sending message

        try {
            const response = await fetch('http://localhost:5000/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: trimmedMessage }),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch response from the API");
            }

            const { reply } = await response.json();

            console.log("Reply from API(In sendMessage function):", reply);

            const formattedReply = formatText(reply);

            setMessages(messages => [...messages, { id: Date.now() + 1, text: formattedReply, sender: 'bot' }]);
        } catch(error){
            console.error("Error in sendMessage:", error);
            setMessages(messages => [...messages, { id: Date.now() + 1, text: "Error: Could not load the bot response.", sender: 'bot' }]);
        } finally{
            setLoading(false); // End loading when the process is complete, whether success or error
        }
    };
    
    
    
    const formatText = (text) => {
        // Check if text is a string, otherwise return it as-is or handle appropriately
        if (typeof text !== 'string') {
            console.error("Expected a string but got:", text);
            return String(text); // You can convert it to a string or return an empty string
        }
    
        // Bold formatting: **bold**
        let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
        // Split the text by new lines and check for list items
        const lines = formattedText.split('\n').map((line, index) => {

            // Detect unordered list items that start with '* '
            if (line.trim().startsWith('* ')) {
                return `<li key=${index}>${line.trim().substring(2)}</li>`;

            // Detect ordered list items that start with a number (e.g., '1. ')
            } else if (/^\d+\.\s/.test(line.trim())) {
                return `<li key=${index}>${line.trim()}</li>`;

            // Regular paragraphs for any other text
            } else if (line.trim() !== '') {
                return `<p key=${index}>${line}</p>`;
            }

            return null;
        });
    
        // Join the lines back into a single string
        const formattedHTML = lines.filter(Boolean).join('');

        // Wrap the lines that contain list items in an unordered list
        if (lines.some(line => line && line.startsWith('<li'))) {
            return `<ul class="indented-list">${formattedHTML}</ul>`;
        }

        return formattedHTML;
    };
    
    

    const renderMessage = (msg) => {
        if (msg.sender === 'bot') {
            return (
                <div 
                    key={msg.id} 
                    className="text-left text-blue-500 m-2 p-2 bg-gray-50 rounded"
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                />
            );
        } else {
            return <p key={msg.id} className='text-right text-green-700 m-2 p-2 bg-green-100 rounded'>{msg.text}</p>;
        }
    };
    
    

    return (
        <div className="max-w-[1040px] m-auto pt-40 flex flex-col h-[600px]">
            {/* Spinner for loading state, positioned at the top-right corner */}
            {loading && (
                <div className="absolute top-0 right-0 m-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path className="animate-pulse" d="M13 9L15 9 15 6 18 3 19 9 22 9 22 12 19 12 16 15 16 21 13 21 13 16 9 13 5 21 2 21 8 13 7 10 9 8 11 12 14 12z" />
                        <circle cx="5" cy="5" r="2" className="animate-ping" />
                    </svg>
                </div>
            )}
            <div className="flex-grow overflow-y-auto border border-gray-300 rounded p-4 mb-2">
                {messages.map(msg => renderMessage(msg))}
                {showQuickResponses && (
                    <div className='flex items-center justify-center space-x-2 mt-4'>
                        <button onClick={() => quickResponse('Hello!')} className='bg-black text-white rounded-3xl px-8 py-2 ml-16 text-xl font-bold'>Hello</button>
                    </div>
                )}
            </div>
            <div className='flex space-x-2'>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className='flex-grow p-2 border border-gray-300 rounded'
                />
                <button onClick={() => sendMessage(input)} className="p-2 bg-yellow-300 text-white rounded hover:text-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4l16 8-16 8V4z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}