/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageProps } from "@/@types";
import DotsVerticalSvg from "@/assets/dots-vertical.svg";

interface IProps {
  message: MessageProps;
  currentUser: string;
}

export function Messages({ message, currentUser }: IProps) {
  const isUserSender = currentUser === "Antonio Carlos";

  return (
    <div className="m-0 mb-10">
      {isUserSender ? (
        <div className="flex flex-col items-end">
          <div className="mb-4 flex items-center gap-2">
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

          <div className="ml-0 mr-0 flex w-1/3 flex-row-reverse">
            <div className="rounded-bl-md rounded-br-md rounded-tl-md border bg-gray-200 p-4">
              <pre
                className="text-xs text-black"
                style={{ whiteSpace: "pre-line" }}
              >
                {message.body}
              </pre>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-start">
          <div className="mb-4 flex items-center gap-2">
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

          <div className="ml-0 mr-0 flex w-1/2 flex-row justify-end">
            <button>
              <img src={DotsVerticalSvg} alt="" className="h-fit w-fit" />
            </button>

            <div className="whitespace-pre-wrap rounded-bl-md rounded-br-md rounded-tr-md border bg-gray-200 p-4">
              <pre
                className="text-xs text-black"
                style={{ whiteSpace: "pre-line" }}
              >
                {message.body}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
