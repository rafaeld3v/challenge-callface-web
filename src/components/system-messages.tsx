import { MessageProps } from "@/@types";
import SystemIcon from "@/assets/avatar-callface.svg";
import DotsVerticalSvg from "@/assets/dots-vertical.svg";

interface IProps {
  message: MessageProps;
}

export function SystemMessages({ message }: IProps) {
  return (
    <>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <img className="h-8 w-8 rounded-full" src={SystemIcon} alt="System" />
          <strong className="text-xs font-semibold">Callface</strong>
          <span className="text-xs text-gray-500">{message.date_formated}</span>
        </div>

        <div className="mb-4 ml-0 mr-0 flex w-[calc(100%-10%)] flex-row justify-end">
          <button>
            <img src={DotsVerticalSvg} alt="" />
          </button>

          <div className="whitespace-pre-wrap rounded-bl-md rounded-br-md rounded-tl-md border bg-primary p-4 ">
            <pre
              className="text-xs text-white"
              style={{ whiteSpace: "pre-line" }}
            >
              {message.body}
            </pre>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-lg bg-primary px-4 py-2 text-xs font-medium text-white">
            Iniciar ligação
          </button>
          <button className="rounded-lg border border-primary bg-white px-4 py-2 text-xs font-medium text-primary">
            +opções
          </button>
        </div>
      </div>
    </>
  );
}
