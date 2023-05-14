export const Agenda = () => {
  return (
    <>
      <form>
        {" "}
        <div className="mt-3 shadow-md sm:rounded-lg">
          <div>
            <h2 className="mb-5 text-2xl mt-5">Day 1</h2>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 w-1/2 py-4 font-medium text-gray-900 whitespace-nowrap">
                Registration
              </div>
              <div className="px-6 py-4">
                from
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: true, maxLength: 25 }}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div className="px-6 py-4">
                to{" "}
                <Controller
                  name="end_date"
                  rules={{ required: true, maxLength: 25 }}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap">
                Event opening
              </div>
              <div className="px-6 py-4">
                from
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: true, maxLength: 25 }}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div className="px-6 py-4">
                to{" "}
                <Controller
                  name="end_date"
                  rules={{ required: true, maxLength: 25 }}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap">
                Find your spot
              </div>
              <div className="px-6 py-4">
                from
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: true, maxLength: 25 }}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div className="px-6 py-4">
                to{" "}
                <Controller
                  name="end_date"
                  rules={{ required: true, maxLength: 25 }}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap">
                First round of membership sessions
              </div>
              <div className="px-6 py-4">
                from
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: true, maxLength: 25 }}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div className="px-6 py-4">
                to{" "}
                <Controller
                  name="end_date"
                  rules={{ required: true, maxLength: 25 }}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap">
                Second round of membership sessions
              </div>
              <div className="px-6 py-4">
                from
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: true, maxLength: 25 }}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div className="px-6 py-4">
                to{" "}
                <Controller
                  name="end_date"
                  rules={{ required: true, maxLength: 25 }}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-5 text-2xl mt-5">Day 2</h2>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap">
                Registration
              </div>
              <div className="px-6 py-4">
                from
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: true, maxLength: 25 }}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div className="px-6 py-4">
                to{" "}
                <Controller
                  name="end_date"
                  rules={{ required: true, maxLength: 25 }}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap">
                First round of membership sessions
              </div>
              <div className="px-6 py-4">
                from
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: true, maxLength: 25 }}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div className="px-6 py-4">
                to{" "}
                <Controller
                  name="end_date"
                  rules={{ required: true, maxLength: 25 }}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>
            <div className="bg-white border-b flex items-center">
              <div className="px-6 py-4 w-1/2 font-medium text-gray-900 whitespace-nowrap">
                Second round of membership sessions
              </div>
              <div className="px-6 py-4">
                from
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: true, maxLength: 25 }}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
              <div className="px-6 py-4">
                to{" "}
                <Controller
                  name="end_date"
                  rules={{ required: true, maxLength: 25 }}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className="border border-gray-500 p-2 rounded cursor-pointer"
                      selected={new Date(value)}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <div className="mt-5">
            <div className="mb-5">
              <button
                type="button"
                className={agenda === "Day1" ? "underline mr-5" : "mr-5"}
                onClick={() => setAgenda("Day1")}
              >
                Day 1
              </button>
              <button
                className={agenda === "Day2" ? "underline" : undefined}
                onClick={() => setAgenda("Day2")}
                type="button"
              >
                Day 2
              </button>
            </div>
            {agenda === "Day1" ? (
              <input
                placeholder="Agenda Day 1"
                type="text"
                id="agenda_day_one"
                {...register("agenda_day_one", {
                  required: true,
                  maxLength: 25,
                })}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 h-[350px] mb-5"
              />
            ) : (
              <input
                placeholder="Agenda Day 2"
                type="text"
                id="agenda_day_two"
                {...register("agenda_day_two", {
                  required: true,
                  maxLength: 25,
                })}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 h-[350px] mb-5"
              />
            )}
          </div>
        </div>
      </form>
    </>
  );
};
