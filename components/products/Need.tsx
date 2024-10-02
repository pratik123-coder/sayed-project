import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";

const Needs = () => {
  return (
    <div className="w-full pt-24 flex justify-center px-24 my-10">
      <div className="bg-black p-8 rounded-lg w-full justify-center flex space-x-10 items-center">
        {/* Left Section with Label and Input */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="buses" className="text-white text-lg">
            Enter Number of Buses
          </Label>
          <Input
            id="buses"
            type="number"
            placeholder="Enter"
            className="bg-white rounded-md p-4 text-black text-lg"
          />
        </div>

        {/* Right Section with Label and Dropdown */}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="ticket-range" className="text-white text-lg">
            Select Average Ticket Range (Single Selection)
          </Label>
          <Select>
            <SelectTrigger className="w-full bg-white p-4 rounded-md">
              <SelectValue placeholder="Select Average Ticket Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Less than $50</SelectItem>
              <SelectItem value="2">$50 - $100</SelectItem>
              <SelectItem value="3">More than $100</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Needs;
