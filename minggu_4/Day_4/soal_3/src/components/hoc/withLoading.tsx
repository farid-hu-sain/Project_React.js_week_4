import React from "react";

interface WithLoadingProps {
  loading: boolean;
}

export function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithLoadingComponent(props: P & WithLoadingProps) {
    const { loading, ...rest } = props;

    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center p-6">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
          <p className="mt-3 text-blue-600 font-semibold">Loading...</p>
        </div>
      );
    }

    return <WrappedComponent {...(rest as P)} />;
  };
}
