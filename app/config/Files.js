const Files = {
  regex: {
    characterOnly: /^[a-zA-Z]*$/,
    numberOnly: /^[0-9]*$/,
    phoneNumber: /^[6-9][0-9]{9}$/,
    emailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
    otp: /^[0-9]{6}$/,
  },
};

export default Files;
