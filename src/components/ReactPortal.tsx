import { useLayoutEffect, useState } from "react";
import ReactDom from "react-dom";

type Props = {
  children: React.ReactNode;
  wrapperId: string;
};

export default function ReactPortal({ children, wrapperId }: Props) {
  const [wrapper, setWrapper] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId) as HTMLElement; // as HTMLElement no need but for showing
    let created = false;
    if (!element) {
      created = true;
      const wrapperDiv = document.createElement("div");
      wrapperDiv.setAttribute("id", wrapperId);
      document.body.appendChild(wrapperDiv);
      element = wrapperDiv;
    }

    // Set wrapper state.
    setWrapper(element);

    // Cleanup effect.
    return () => {
      if (created && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);
  // Return null on initial rendering.
  if (wrapper === null) return null;
  // Return portal-wrapper component.
  return ReactDom.createPortal(children, wrapper);
}
