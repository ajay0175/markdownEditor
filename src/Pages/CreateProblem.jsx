import { useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function CreateProblem() {
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Create a new problem
      </h1>
      <div className="w-full max-w-4xl p-4 bg-white rounded shadow-lg">
        <form className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700">Problem Title:</span>
            <input
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-indigo-500"
              value={title}
            />
          </label>

          <label className="text-gray-700">
            Description:
            <textarea
              name="description"
              onChange={(e) => setMarkdown(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shawdow-sm focus:outline-indigo-500"
              value={markdown}
            ></textarea>
          </label>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Description Preview: </h2>
            <div className="mt-2 p-4 bg-gray-200 rounded ">
              <Markdown rehypePlugins={[rehypeRaw]} className="prose">{markdown}</Markdown>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
