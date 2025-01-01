import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // بروزرسانی state تا نمایش fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // می‌توانید خطاها را به یک سرویس گزارش‌دهی ارسال کنید
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // UI برای زمانی که خطایی رخ می‌دهد
      return (
        <div className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center">
          <h1 className="text-3xl">متاسفانه خطایی رخ داده است.</h1>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
