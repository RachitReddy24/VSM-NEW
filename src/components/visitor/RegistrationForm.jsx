import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

function RegistrationForm() {
  return (
    <div className="bg-white rounded-xl shadow border p-8">

      <h1 className="text-3xl font-bold mb-8">
        Visitor Registration
      </h1>

      {/* Personal Information */}

      <div className="mb-10">

        <h2 className="text-xl font-semibold border-b pb-3 mb-6">
          Personal Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Input
            label="Full Name"
            placeholder="Enter Full Name"
          />

          <Input
            label="Mobile Number"
            placeholder="9876543210"
          />

          <Input
            label="Email Address"
            placeholder="example@gmail.com"
          />

          <Input
            label="Company Name"
            placeholder="Company Name"
          />

        </div>

      </div>

      {/* Visit Details */}

      <div className="mb-10">

        <h2 className="text-xl font-semibold border-b pb-3 mb-6">
          Visit Details
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Input
            label="Meeting Person"
            placeholder="Host Name"
          />

          <Input
            label="Department"
            placeholder="Department"
          />

          <Input
            label="Purpose of Visit"
            placeholder="Business Meeting"
          />

          <Input
            label="Visit Date"
            type="date"
          />

          <Input
            label="Expected Check-In Time"
            type="time"
          />

        </div>

      </div>

      {/* Identity Details */}

      <div className="mb-10">

        <h2 className="text-xl font-semibold border-b pb-3 mb-6">
          Identity Details
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Select
            label="ID Type"
            options={[
              "Aadhaar Card",
              "PAN Card",
              "Passport",
              "Driving License",
              "Voter ID",
            ]}
          />

          <Input
            label="ID Number"
            placeholder="Enter ID Number"
          />

          <Input
            label="Vehicle Number"
            placeholder="Optional"
          />

        </div>

      </div>

      {/* Declaration */}

      <div className="border rounded-xl p-5 bg-slate-50">

        <label className="flex items-start gap-3">

          <input
            type="checkbox"
            className="mt-1"
          />

          <span className="text-sm text-gray-600">
            I confirm that the information provided is accurate. I agree
            to follow the organization's visitor policies and security
            guidelines during my visit.
          </span>

        </label>

      </div>

      {/* Register Button */}

      <div className="mt-8 flex justify-end">

        <Button>
          Register Visitor
        </Button>

      </div>

    </div>
  );
}

export default RegistrationForm;