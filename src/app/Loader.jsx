"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <DotLottieReact
      src="https://lottie.host/f5b51bbd-6cee-46f4-a90b-98f1cf232dd5/DwavhhK7ny.lottie"
      loop
      autoplay
    />
    </div>
  );
}
