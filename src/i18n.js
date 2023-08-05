import { useState } from "react";
import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";

const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
};

const messageInHindi = {
  myMessage: "आज की तारीख {ts, date, ::yyyyMMdd}",
};

const messageInEnglish = {
  myMessage: "Today is {ts ,date , ::yyyyMMdd}",
};

function App() {
  const [currentLocale, setLocale] = useState("en");
  const getMessageForLocale = (localeType) => {
    switch (localeType) {
      case "en":
        return messageInEnglish;
      case "fr":
        return messagesInFrench;
      case "hi":
        return messageInHindi;
    }
  };

  return (
    <IntlProvider
      messages={getMessageForLocale(currentLocale)}
      locale={currentLocale}
      defaultLocale="en"
    >
      <p>
        <FormattedMessage id="myMessage" values={{ ts: Date.now() }} />
        <br />
      this is name
      </p>
      <button onClick={() => setLocale("fr")}>French</button> <br/>
      <button onClick={() => setLocale("hi")}>Hindi</button>
    </IntlProvider>
  );
}

export default App;