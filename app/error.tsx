"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import EmptyState from "./components/EmptyState";
import Button from "./components/Button";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  const router = useRouter();
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <>
      <EmptyState
        title="Uh Oh!"
        subtitle="Something went wrong. Please try again later."
      />
      <div className="max-w-[500px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <Button label="Go to Home" onClick={() => router.push("/")} />
      </div>
    </>
  );
};

export default ErrorState;
