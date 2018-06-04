import React from "react";

class StepList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      totalSteps: this.props.children.length - 1,
    };
  }

  goToPreviousStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  };

  goToNextStep = () => {
    this.setState({ currentStep: this.state.currentStep + 1 });
  };

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        isActive: index === this.state.currentStep,
        displayPrevious: this.state.currentStep > 0,
        displayNext: this.state.currentStep < this.state.totalSteps,
        displaySubmit: this.state.currentStep === this.state.totalSteps,
        goToPreviousStep: () => this.goToPreviousStep(),
        goToNextStep: () => this.goToNextStep(),
      });
    });

    return children;
  }
}

export { StepList };
