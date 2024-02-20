/* eslint-disable @typescript-eslint/no-explicit-any */
import "./global.css";
import "react-loading-skeleton/dist/skeleton.css";

import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

import Avatar1Svg from "@/assets/avatar-1.svg";
import Avatar2Svg from "@/assets/avatar-2.svg";
import BellSvg from "@/assets/bell.svg";
import CalendarEditSvg from "@/assets/calendar-edit.svg";
import CameraSvg from "@/assets/camera.svg";
import ChevronDownPNG from "@/assets/chevron-down.png";
import ChevronDownSvg from "@/assets/chevron-down.svg";
import EditOutlineSvg from "@/assets/edit-outline.svg";
import EnvelopeSvg from "@/assets/envelope-outline.svg";
import FileSvg from "@/assets/file.svg";
import HistorySvg from "@/assets/history.svg";
import IdCardSvg from "@/assets/id-card.svg";
import LinkOutlinePNG from "@/assets/link-outline.png";
import LinkOutlineSvg from "@/assets/link-outline.svg";
import LogoSvg from "@/assets/logo.svg";
import MicrophoneSvg from "@/assets/microphone.svg";
import MicrophoneGreenSvg from "@/assets/microphone-green.svg";
import MicrophoneOffSvg from "@/assets/microphone-off.svg";
import PapperPlaneSvg from "@/assets/papper-plane.svg";
import PhoneKeyCallSvg from "@/assets/phone-key-call.svg";
import PhoneKeyDeleteSvg from "@/assets/phone-key-delete.svg";
import PhoneOffSvg from "@/assets/phone-off.svg";
import PhoneOutlineSvg from "@/assets/phone-outline.svg";
import QuestionMarkOutlinePNG from "@/assets/question-mark-outline.png";
import RecordSvg from "@/assets/record.svg";
import UserCircleSvg from "@/assets/user-circle.svg";
import WifiSvg from "@/assets/wifi.svg";

import { MessageProps } from "./@types";
import { Messages } from "./components/messages";
import { SystemMessages } from "./components/system-messages";
import { formatPhoneNumber } from "./utils/formatPhoneNumber";

interface UserProps {
  avatar: string;
  name: string;
  idCard: string;
  phone: string;
  email: string;
  link: string;
}

export function App() {
  const [number, setNumber] = useState("");
  const [isCalling, setIsCalling] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [user, setUser] = useState<UserProps>();
  const [messages, setMessages] = useState<MessageProps[]>([]);

  const [demoIsActive] = useState(false);
  const [planIsActive, setIsPlanIsActive] = useState(false);

  const messageSystem = {
    user: {
      name: "Antonio Carlos",
      profileImageUrl: Avatar1Svg,
    },
    body: "Oi Antonio, como posso te ajudar hoje?",
    date_formated: "11:46",
  };

  function handleClick(value: string) {
    if (number.length < 11) {
      setNumber((prevNumber) => prevNumber + value);
    }
  }

  function handleDelete() {
    setNumber((prevNumber) => prevNumber.slice(0, -1));
  }

  function handleCall() {
    if (planIsActive && (demoIsActive || !demoIsActive)) {
      setIsCalling(true);
    }
  }

  function handleStopCall() {
    setIsCalling(false);
  }

  function handleActivatePlan() {
    setIsLoadingButton(true);

    setTimeout(() => {
      setIsPlanIsActive(true);
      setIsLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => {
      const messagesData: MessageProps[] = [
        {
          user: {
            name: "Maria",
            profileImageUrl: Avatar2Svg,
          },
          body: "Oi,\n\nPreciso falar com vocês o quanto antes para resolver algumas pendências.\n\nConseguem me ajudar?",
          date_formated: "11:46",
        },
        {
          user: {
            name: "Antonio Carlos",
            profileImageUrl: Avatar1Svg,
          },
          body: "Oi, boa tarde Maria. \n\nTenho essas opções de horário se quiser agendar nossa conversa. Mas caso escolha, também posso lhe ligar agora.",
          date_formated: "11:46",
        },
      ];

      const userData: UserProps = {
        avatar: Avatar1Svg,
        name: "Maria do Carmo Silveira dos Anjos Magalhães",
        idCard: "000.000.000-00",
        phone: "(85) 9 9999.9999",
        email: "mariac@email.com.br",
        link: "www.maria.carmo.com.br",
      };

      setMessages(messagesData);
      setUser(userData);
      setIsLoading(false);
    }, 2000);
  }, [setMessages, setUser, setIsLoading]);

  useEffect(() => {
    if (!planIsActive && (demoIsActive || !demoIsActive)) {
      setIsLoading(true);
    }
  }, [demoIsActive, planIsActive, isLoading]);

  return (
    <div className="h-screen w-screen">
      <header className="flex h-[72px] w-full items-center justify-between bg-primary px-8 py-4">
        <img src={LogoSvg} alt="Logo Callface" />

        <nav className="flex items-center justify-between gap-4">
          <img src={BellSvg} alt="" />
          <img src={Avatar1Svg} alt="" />
          <span className="text-sm font-medium text-white">
            António Carlos S.
          </span>
          <img src={ChevronDownSvg} alt="" />
        </nav>
      </header>

      <main className="grid min-h-[calc(100vh-72px)] grid-cols-3 gap-4 bg-gray-300 px-6 py-4">
        <section className="flex-col justify-between gap-4 rounded-bl-md rounded-tl-md bg-white p-4">
          <div className="flex h-full flex-col justify-between gap-4">
            <div
              className={`flex flex-col items-center justify-between gap-4 rounded-md border bg-gray-100 py-4 ${
                planIsActive && (demoIsActive || !demoIsActive)
                  ? ""
                  : "opacity-80"
              }`}
            >
              <div className="flex flex-col items-center justify-between gap-4 ">
                {isLoading ? (
                  <>
                    <Skeleton width={32} height={32} circle />
                    <Skeleton width={320} height={16} />
                  </>
                ) : (
                  <>
                    <img
                      src={Avatar2Svg}
                      alt=""
                      className="h-8 w-8 rounded-full"
                    />

                    <strong className="text-sm text-purple-950">
                      {user!.name}
                    </strong>
                  </>
                )}
              </div>

              <div className="h-[1px] w-full bg-gray-200" />

              <div className="flex w-full  items-center justify-evenly">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center justify-between gap-4">
                    <img src={IdCardSvg} alt="" className="pr-4" />
                    <img src={PhoneOutlineSvg} alt="" className="pr-4" />
                  </div>

                  <div className="flex flex-col items-start justify-between gap-4">
                    {isLoading ? (
                      <>
                        <Skeleton width={160} height={16} />
                        <Skeleton width={160} height={16} />
                      </>
                    ) : (
                      <>
                        <span className="text-sm text-purple-950">
                          {user!.idCard}
                        </span>
                        <span className="text-sm text-purple-950">
                          {user!.phone}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center justify-between gap-4">
                    <img src={EnvelopeSvg} alt="" className="pr-4" />
                    <img src={LinkOutlineSvg} alt="" className="pr-4" />
                  </div>

                  <div className="flex flex-col items-start justify-between gap-4">
                    {isLoading ? (
                      <>
                        <Skeleton width={160} height={16} />
                        <Skeleton width={160} height={16} />
                      </>
                    ) : (
                      <>
                        <span className="text-sm text-purple-950">
                          {user!.email}
                        </span>
                        <span className="text-sm text-purple-950">
                          {user!.link}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`flex min-h-20 w-full items-center justify-between gap-3 overflow-x-hidden ${
                planIsActive && (demoIsActive || !demoIsActive)
                  ? ""
                  : "opacity-30"
              }`}
            >
              <button className="h-full w-full rounded-md border bg-white p-4 text-sm text-purple-950 shadow-md shadow-gray-200 md:w-full">
                Planos e valores
              </button>
              <button className="h-full w-full rounded-md border bg-white p-4 text-sm text-purple-950 shadow-md shadow-gray-200">
                Contrato
              </button>
              <button className="h-full w-full rounded-md border bg-white p-4 text-sm text-purple-950 shadow-md shadow-gray-200">
                Reenviar proposta
              </button>
              <button className="h-full w-full rounded-md border bg-white p-4 text-sm text-purple-950 shadow-md shadow-gray-200">
                Produtos relacionados
              </button>
            </div>

            <div className="flex flex-grow flex-col justify-between gap-8 rounded-md border bg-white p-4 shadow-md shadow-gray-200">
              <div
                className={`flex items-center justify-between ${
                  planIsActive && (demoIsActive || !demoIsActive)
                    ? ""
                    : "opacity-50"
                }`}
              >
                <button className="flex w-16 flex-col items-center  justify-center gap-1 border-b-2 border-primary text-xs text-primary">
                  <img src={UserCircleSvg} alt="" />
                  Detalhes
                </button>

                <button className="flex  w-16 flex-col items-center justify-center gap-1 text-xs">
                  <img src={FileSvg} alt="" />
                  Contrato
                </button>

                <button className="flex  w-16 flex-col items-center justify-center gap-1 text-xs">
                  <img src={CalendarEditSvg} alt="" />
                  Anotações
                </button>

                <button className="flex  w-16 flex-col items-center justify-center gap-1 text-xs">
                  <img src={HistorySvg} alt="" />
                  Histórico
                </button>
              </div>

              {planIsActive && (demoIsActive || !demoIsActive) ? (
                <div className="flex h-full flex-col items-start justify-between">
                  <div className="flex gap-12">
                    <div className="flex flex-col justify-between">
                      <span className="text-xs text-gray-500">CPF</span>
                      <span className="text-xs text-gray-500">
                        099.999.999-99
                      </span>
                    </div>
                    <div className="flex flex-col justify-between">
                      <span className="text-xs text-gray-500">
                        Data nascimento
                      </span>
                      <span className="text-xs text-gray-500">04/09/1991</span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <span className="text-xs text-gray-500">Cargo</span>
                    <span className="text-xs text-gray-500">
                      Diretor de Customer Experience
                    </span>
                  </div>

                  <div className="flex flex-col justify-between">
                    <span className="text-xs text-gray-500">Empresa</span>
                    <span className="text-xs text-gray-500">
                      Big international enterprise S.A.
                    </span>
                  </div>

                  <div className="flex gap-12">
                    <div className="flex flex-col justify-between">
                      <span className="text-xs text-gray-500">CNPJ</span>
                      <span className="text-xs text-gray-500">
                        99.999.999/0001-00
                      </span>
                    </div>
                    <div className="flex flex-col justify-between">
                      <span className="text-xs text-gray-500">
                        Faturamento anual
                      </span>
                      <span className="text-xs text-gray-500">
                        R$ 67.459.026,00
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <span className="text-xs text-gray-500">
                      N. de funcionários
                    </span>
                    <span className="text-xs text-gray-500">500 - 800</span>
                  </div>

                  <div className="flex flex-col justify-between">
                    <span className="text-xs text-gray-500">Industria</span>
                    <span className="text-xs text-gray-500">
                      Bens de consumo: automóveis
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mx-auto flex h-full max-h-80 max-w-96 flex-col items-center justify-between rounded-md bg-primary px-8 py-6">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span className="text-center text-xl font-medium text-white">
                      Chegou o momento de aproveitar ao máximo sua experiência
                    </span>

                    <span className="text-xs font-light text-white">
                      Integração rápida e fácil.
                    </span>

                    <button
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-white py-2 text-sm font-medium text-primary disabled:cursor-wait disabled:opacity-70"
                      onClick={handleActivatePlan}
                      disabled={isLoadingButton}
                    >
                      <img
                        src={LinkOutlinePNG}
                        alt=""
                        className="h-4 w-4 "
                        color="rgb(255 56 93 / var(--tw-text-opacity))"
                      />
                      Integrar CRM
                      <img src={ChevronDownPNG} alt="" className="h-4 w-4 " />
                    </button>
                  </div>

                  <button className="flex items-center justify-center gap-2 rounded-md bg-transparent">
                    <img
                      src={QuestionMarkOutlinePNG}
                      alt=""
                      className="h-4 w-4 text-white"
                    />
                    <span className="text-xs text-white">
                      Caso precise de ajuda
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="max-h-[calc(100vh-104px)] bg-white">
          <div className="flex h-[90%] max-h-[calc(100vh-104px)] flex-col items-end justify-end gap-4 overflow-y-auto p-4">
            {isLoading ? (
              <SystemMessages message={messageSystem} />
            ) : (
              messages.map((message, index) => (
                <Messages
                  key={index}
                  message={message}
                  currentUser={message.user.name}
                />
              ))
            )}
          </div>

          <div className="flex h-[10%] w-full items-center justify-between gap-2 border-t border-t-gray-300 p-4">
            {isCalling && (
              <div className="flex w-36 items-center justify-start gap-4 px-4">
                <button>
                  <img
                    src={MicrophoneSvg}
                    alt=""
                    className="h-8 w-8 rounded-full"
                  />
                </button>

                <button>
                  <img
                    src={CameraSvg}
                    alt=""
                    className="h-8 w-8 rounded-full"
                  />
                </button>
              </div>
            )}

            <input
              type="text"
              placeholder="Escrever mensagem..."
              className=" w-full rounded-md bg-gray-200 p-2 focus:border-gray-300 focus:ring-gray-300"
            />

            <button className="min-w-8">
              <img
                src={PapperPlaneSvg}
                alt=""
                className="h-8 w-8 rounded-full"
              />
            </button>
          </div>
        </section>

        <section className="flex flex-col items-center justify-between rounded-br-md rounded-tr-md bg-white px-4 py-8">
          <div className="flex w-full items-center justify-evenly">
            <button className="flex w-fit items-center justify-between gap-4 rounded-md p-2 text-sm shadow-md shadow-gray-200">
              <img src={MicrophoneGreenSvg} alt="" />
              Microfone
            </button>

            <div className="flex flex-col items-center justify-between gap-1">
              <span className="text-xs text-gray-500">Duração</span>
              <span className="text-2xl">00:00:00</span>
            </div>

            <button className="flex w-fit  items-center justify-between gap-4 rounded-md p-2 text-sm shadow-md shadow-gray-200">
              <img src={WifiSvg} alt="" />
              Rede
            </button>
          </div>

          <div className="flex flex-col items-center gap-8">
            <span className="text-4xl font-medium">
              {formatPhoneNumber(number)}
            </span>

            <div className="flex h-full w-full flex-col justify-between gap-4">
              <div className="flex w-full justify-center gap-4">
                <button
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500"
                  onClick={() => handleClick("1")}
                >
                  <span className="text-2xl text-black">1</span>
                </button>
                <button
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500"
                  onClick={() => handleClick("2")}
                >
                  <span className="text-2xl text-black">2</span>
                  ABC
                </button>
                <button
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500"
                  onClick={() => handleClick("3")}
                >
                  <span className="text-2xl text-black">3</span>
                  DEF
                </button>
              </div>

              <div className="gao-4 flex w-full justify-center gap-4">
                <button
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500"
                  onClick={() => handleClick("4")}
                >
                  <span className="text-2xl text-black">4</span>
                  GHI
                </button>
                <button
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500"
                  onClick={() => handleClick("5")}
                >
                  <span className="text-2xl text-black">5</span>
                  JKL
                </button>
                <button
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500"
                  onClick={() => handleClick("6")}
                >
                  <span className="text-2xl text-black">6</span>
                  MNO
                </button>
              </div>

              <div className="gao-4 flex w-full justify-center gap-4">
                <button
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500"
                  onClick={() => handleClick("7")}
                >
                  <span className="text-2xl text-black">7</span>
                  PQRS
                </button>
                <button
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500"
                  onClick={() => handleClick("8")}
                >
                  <span className="text-2xl text-black">8</span>
                  TUV
                </button>
                <button
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500"
                  onClick={() => handleClick("9")}
                >
                  <span className="text-2xl text-black">9</span>
                  WXYZ
                </button>
              </div>

              <div className="gao-4 flex w-full justify-center gap-4">
                <button
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500"
                  onClick={() => handleClick("*")}
                >
                  <span className="text-2xl text-black">*</span>
                </button>

                <button
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500"
                  onClick={() => handleClick("0")}
                >
                  <span className="text-2xl text-black">0</span>
                </button>

                <button
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 text-xs text-gray-500"
                  onClick={() => handleClick("#")}
                >
                  <span className="text-2xl text-black">#</span>
                </button>
              </div>

              <div className="gao-4 flex w-full justify-center gap-4">
                {isCalling ? (
                  <>
                    <button className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-300 text-xs text-white">
                      <img src={MicrophoneOffSvg} alt="" />
                    </button>

                    <button
                      className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-red-500 text-xs text-white"
                      onClick={handleStopCall}
                    >
                      <img src={PhoneOffSvg} alt="" />
                    </button>

                    <button
                      className="flex h-16 w-16 flex-col items-center justify-center rounded-full text-xs text-gray-500"
                      onClick={handleDelete}
                    >
                      <img src={PhoneKeyDeleteSvg} alt="" />
                    </button>
                  </>
                ) : (
                  <>
                    <button className="h-16 w-16 cursor-default rounded-full text-xs text-gray-500" />

                    <button
                      className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-green-500 text-xs text-white"
                      onClick={handleCall}
                    >
                      <img src={PhoneKeyCallSvg} alt="" />
                    </button>

                    <button
                      className="flex h-16 w-16 flex-col items-center justify-center rounded-full text-xs text-gray-500"
                      onClick={handleDelete}
                    >
                      <img src={PhoneKeyDeleteSvg} alt="" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="justify-centter flex w-full items-center justify-center gap-4">
            <button className="flex w-full max-w-48 items-center justify-center gap-4 rounded-md bg-primary p-2 text-white">
              <img src={RecordSvg} alt="" />
              Gravar ligação
            </button>

            <button className="flex w-full max-w-48 items-center justify-center gap-4 rounded-md bg-primary p-2 text-white">
              <img src={EditOutlineSvg} alt="" />
              Transcrever ligação
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
