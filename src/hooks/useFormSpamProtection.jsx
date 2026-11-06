import { useId, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const MINIMUM_COMPLETION_TIME_MS = 3000;
const siteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;

export const useFormSpamProtection = () => {
  const fieldId = useId();
  const startedAt = useRef(Date.now());
  const captchaRef = useRef(null);
  const [honeypot, setHoneypot] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  const isLikelyAutomated = () =>
    honeypot.trim() !== "" ||
    Date.now() - startedAt.current < MINIMUM_COMPLETION_TIME_MS ||
    captchaToken === "";

  const resetSpamProtection = () => {
    startedAt.current = Date.now();
    setHoneypot("");
    setCaptchaToken("");
    captchaRef.current?.resetCaptcha();
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

  const captchaField = siteKey ? (
    <div className="form-spam-verification">
      <HCaptcha
        ref={captchaRef}
        sitekey={siteKey}
        onVerify={setCaptchaToken}
        onExpire={() => setCaptchaToken("")}
        onError={() => setCaptchaToken("")}
      />
    </div>
  ) : (
    <p role="alert">
      Form verification is temporarily unavailable. Please try again later.
    </p>
  );

  return {
    captchaField,
    captchaToken,
    honeypot,
    honeypotField,
    isLikelyAutomated,
    resetSpamProtection,
  };
};
