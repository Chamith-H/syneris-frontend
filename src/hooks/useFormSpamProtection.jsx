import { useId, useRef, useState } from "react";

const MINIMUM_COMPLETION_TIME_MS = 3000;

export const useFormSpamProtection = () => {
  const fieldId = useId();
  const startedAt = useRef(Date.now());
  const [honeypot, setHoneypot] = useState("");

  const isLikelyAutomated = () =>
    honeypot.trim() !== "" ||
    Date.now() - startedAt.current < MINIMUM_COMPLETION_TIME_MS;

  const resetSpamProtection = () => {
    startedAt.current = Date.now();
    setHoneypot("");
  };

  const honeypotField = (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-10000px",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
    >
      <label htmlFor={fieldId}>Leave this field empty</label>
      <input
        id={fieldId}
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
      />
    </div>
  );

  return { honeypotField, isLikelyAutomated, resetSpamProtection };
};
