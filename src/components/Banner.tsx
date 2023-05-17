export interface BannerData {
  message: string;
  state: "success" | "error";
}

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "🔥";
  return (
    <>
      <div
        className={`w-full rounded-md ${
          isSuccess ? "bg-green-300" : "bg-red-300"
        } p-2 text-center`}
      >
        {`${icon} ${message}`}
      </div>
    </>
  );
}
