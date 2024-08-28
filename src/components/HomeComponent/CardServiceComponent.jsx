export default function CarsServise() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="card w-full rounded-lg shadow-md bg-white">
          <div className="p-4">
            <h2 className="font-bold text-xl">Cardiac care</h2>
            <p className="text-gray-500">
              We host an enviable list of cardiologists and cardiothoracic
              surgeons who are leaders in this field of medicine. These
              consultants are pioneering the techniques to treat the full range
              of adult cardiac conditions.
            </p>
            <button className="mt-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4">
              Read more
            </button>
          </div>
        </div>
        <div className="card w-full rounded-lg shadow-md bg-white">
          <div className="p-4">
            <h2 className="font-bold text-xl">Cancer care</h2>
            <p className="text-gray-500">
              Private Care at Guy's, a large inpatient centre within the London
              Bridge Hospital campus, specialises in cancer services including
              haemato-oncology, urology, gynaecology, breast care and conditions
              of the head, neck and thyroid.
            </p>
            <button className="mt-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4">
              Read more
            </button>
          </div>
        </div>
        <div className="card w-full rounded-lg shadow-md bg-white">
          <div className="p-4">
            <h2 className="font-bold text-xl">Orthopaedics</h2>
            <p className="text-gray-500">
              Each of our consultants is a subspecialist in their field, having
              pioneered and perfected procedures: from routine surgeries, such
              as hip replacements, to complex spinal reconstructions.
            </p>
            <button className="mt-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4">
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
