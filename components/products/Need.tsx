const Needs = () => {
  return (
    <div className="w-full pt-24 flex justify-center px-4 md:px-24 my-10">
      <div className="bg-black p-8 rounded-lg w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 items-center md:items-start">
        {/* Left Section with Label and Input */}
        <div className="flex flex-col space-y-2 w-full md:w-1/2">
          <label htmlFor="buses" className="text-white text-lg">
            Enter Number of Buses
          </label>
          <input
            id="buses"
            type="number"
            placeholder="Enter"
            className="bg-white rounded-md p-4 text-black text-lg"
            aria-label="Enter number of buses"
            min="1"
          />
        </div>

        {/* Right Section with Label and Dropdown */}
        <div className="flex flex-col space-y-2 w-full md:w-1/2">
          <label htmlFor="ticket-range" className="text-white text-lg">
            Select Average Ticket Range (Single Selection)
          </label>
          <select
            id="ticket-range"
            className="w-full bg-white p-4 rounded-md text-black text-lg"
            aria-label="Select average ticket range"
            defaultValue=""
          >
            <option value="" disabled>
              Select Average Ticket Range
            </option>
            <option value="1">Less than $50</option>
            <option value="2">$50 - $100</option>
            <option value="3">More than $100</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Needs;
