const messages = [
  {
    match: (message) => message === "Can I ask about your transition?",
    Message: () => (
      <>
        Sure! I have been questioning my assigned gender since at least 2019,
        but did not decide to transition until August 2021, shortly after
        reading one of my favorite books: "Yes, You Are Trans Enough" by Mia
        Violet (highly recommended)
      </>
    ),
  },
];

export default messages;
