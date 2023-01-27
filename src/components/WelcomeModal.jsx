import React from "react";

class WelcomeModal extends React.PureComponent {
  render() {
    return (
      <div className="grid h-fit w-80 items-center rounded-3xl border-2 border-solid bg-white p-5  leading-10">
        <div className="mb-3 text-2xl font-bold">
          Welcome to Minesweeper game
        </div>
        <div className="text-sm">
          1. Click the cell <br />
          ∙∙∙∙‣ number of mines around
          <br />
          2. Right Mouse Click or Click(0.3s)🤏 <br />
          ∙∙∙∙‣ 🏳️‍🌈 <br />
          3. Click once more <br />
          ∙∙∙∙‣ ?
        </div>
      </div>
    );
  }
}

export default WelcomeModal;
