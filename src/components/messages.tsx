import { MessageProps } from "@/@types";
import DotsVerticalSvg from "@/assets/dots-vertical.svg";

interface IProps {
  message: MessageProps;
  currentUser: string;
}

export function Messages({ message, currentUser }: IProps) {
  const isUserSender = currentUser === "Antonio Carlos";

  return (
    <>
      {isUserSender ? (
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <strong className="text-xs font-semibold">
              {message.user.name}
            </strong>
            <span className="text-xs text-gray-500">
              {message.date_formated}
            </span>
            <img
              className="h-8 w-8 rounded-full"
              src={message.user.profileImageUrl}
              alt={message.user.name}
            />
          </div>

          <div className="flex w-full justify-end gap-1">
            <button>
              <img src={DotsVerticalSvg} alt="" className="h-5 w-5" />
            </button>

            <div className="w-[50%] rounded-bl-md rounded-br-md rounded-tl-md border bg-gray-200 p-4">
              <pre className="whitespace-pre-line text-xs text-black">
                {message.body}
              </pre>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <img
              className="h-8 w-8 rounded-full"
              src={message.user.profileImageUrl}
              alt={message.user.name}
            />
            <strong className="text-xs font-semibold">
              {message.user.name}
            </strong>
            <span className="text-xs text-gray-500">
              {message.date_formated}
            </span>
          </div>

          <div className="flex w-full gap-1">
            <div className="flex w-[50%] justify-start rounded-bl-md rounded-br-md rounded-tr-md border bg-gray-200 p-4">
              <pre className="whitespace-pre-line text-xs text-black">
                {message.body}
              </pre>
            </div>

            <button>
              <img src={DotsVerticalSvg} alt="" className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
