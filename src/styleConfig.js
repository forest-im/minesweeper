const cellClass = {
  proceeding: "bg-blue-300",
  fail: "bg-blue-500",
  success: "bg-yellow-300",
};

const styleConfig = {
  header: {
    base: "grid place-items-center h-10 w-20 sm:w-24 items-center justify-center border-2 border-dotted border-white sm:text-xl rounded-md drop-shadow-lg",
  },
  cell: {
    Proceeding: {
      [-1]: `${cellClass.proceeding}`,
      1: `text-[blue] ${cellClass.proceeding}`,
      2: `text-[green] ${cellClass.proceeding}`,
      3: `text-[#6d45ff] ${cellClass.proceeding}`,
      4: `text-[#00a66c] ${cellClass.proceeding}`,
      5: `text-[red] ${cellClass.proceeding}`,
      6: `text-[red] ${cellClass.proceeding}`,
      7: `text-[red] ${cellClass.proceeding}`,
      8: `text-[red] ${cellClass.proceeding}`,
      9: `bg-slate-500 ${cellClass.proceeding}`,
      10: `${cellClass.proceeding}`,
      11: `bg-slate-500`,
      12: `${cellClass.proceeding}`,
      13: `${cellClass.proceeding}`,
    },
    Fail: {
      [-1]: `bg-red-700`,
      1: `text-[blue] ${cellClass.fail}`,
      2: `text-[green] ${cellClass.fail}`,
      3: `text-[#6d45ff] ${cellClass.fail}`,
      4: `text-[#00a66c] ${cellClass.fail}`,
      5: `text-[red] ${cellClass.fail}`,
      6: `text-[red] ${cellClass.fail}`,
      7: `text-[red] ${cellClass.fail}`,
      8: `text-[red] ${cellClass.fail}`,
      9: `${cellClass.fail}`,
      10: `${cellClass.fail}`,
      11: `bg-slate-500`,
      12: `text-[red] ${cellClass.fail}`,
      13: `text-[red] ${cellClass.fail}`,
    },
    Success: {
      [-1]: `bg-red-700`,
      1: `text-[blue] ${cellClass.success}`,
      2: `text-[green] ${cellClass.success}`,
      3: `text-[#6d45ff] ${cellClass.success}`,
      4: `text-[#00a66c] ${cellClass.success}`,
      5: `text-[red] ${cellClass.success}`,
      6: `text-[red] ${cellClass.success}`,
      7: `text-[red] ${cellClass.success}`,
      8: `text-[red] ${cellClass.success}`,
      9: `${cellClass.success}`,
      10: `${cellClass.success}`,
      11: `bg-slate-500`,
      12: `text-[red] ${cellClass.success}`,
      13: `text-[red] ${cellClass.success}`,
    },
  },
};

export default styleConfig;
