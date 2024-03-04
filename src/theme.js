module.exports = {
  colors: {
    //main Theme
    middleMain: "#f2b3207b",
    main: "#FB9F04",
    mainLightHover: "#eeb34ded",
    mainHover: "#f9a91e",
    mainStrongHover: "#f99a1e",
    mainUnHover: "#ffc303",
    strongMain: "#feefd5",
    lightMain: "#fff6e6",
    darkPink: "#ff0654",
    darkPinkHover: "#fc3171cd",
    lightPink: "#ffe6ee",

    //branding
    primary: "#0C3CFD",
    secondary: "#E3B6B7",
    terciary: "#A9BCB3",

    //main bg lightWhite
    lightWhiteBg: "#fcfbfb",

    // text Color
    textGrey: "#7b7b7b",

    //grey border
    grayBorder: "rgb(209 213 219 / var(--tw-border-opacity))",

    //monochromatic pairings
    lightestGrey: "#EAEAEA",
    lightGrey: "#a1a2a3",
    normalGrey: "#c5c6c7c3",

    sageGray: "#B5B5B6",
    grey: "#EAE0D1",
    middleGrey: "#afafaf",
    strongGrey: "#868688",
    sageDarkGrey: "#636364",
    luxeDarkGrey: "#58595b",
    black: "#000000",

    //peacock secondary colors
    oceanan: "#dcf0ee",
    breeze: "#9ad3d8",
    sand: "#d4caba",
    sandDrift: "#f5eee0",
    //chic pink secondary colors
    blush: "#efcece",
    peonyPink: "#f4e1df",
    taupe: "#c5af9d",
    creamy: "#eae0d1",
    ivory: "#efebe3",

    //sage secondary colors
    ivoryLcae: "#f7f1e6",
    terracotta: "#d38a6b",
    beige: "#dfd2bd",
    lightMoss: "dadbcf",

    //background elements
    light: "f7fcfc",
    vividCool: "#fafafa",
    white: "#ffffff",
    offWhite: "#fcfcfc",

    //functions
    offBlack: "#262626",
    error: "#dd5252",
    sucess: "#75d9a5",
    contourBlush: "#db9e9e",
    punch: "#1eb5c9",
  },

  fontFamily: {
    assistant: ["Assistant", "sans-serif"],
    playfair: [`"Playfair Display"`, "serif"],
    Rampart: ["Rampart One", "cursive"],
    "press-start": ['"Press Start 2P"', "cursive"],
  },

  keyframes: {
    authLeft: {
      "0%": { width: "100%" },
      "50%": { width: "100%" },
      "100%": { width: "30%" },
    },
    authRight: {
      "0%": { width: "0%", display: "none", opacity: 0 },
      "50%": { width: "0%", opacity: 0 },
      "70%": { opacity: 0 },
      "100%": { width: "70%" },
    },
    showRight: {
      "0%": { display: "none" },
      "50%": { display: "none" },
      "70%": { display: "none" },
      "100%": { display: "flex", width: "600px" },
    },

    showingOriginalAnimation: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 },
    },

    animationShowingKeyFrames1: {
      "10%": { opacity: 0.4 },
      "25%": { opacity: 0.6 },
      "50%": { opacity: 0.8 },
      "75%": { opacity: 0.9 },
      "100%": { opacity: 1 },
    },

    animationShowingKeyFrames2: {
      "15%": { opacity: 0.4 },
      "25%": { opacity: 0.6 },
      "50%": { opacity: 0.7 },
      "75%": { opacity: 0.9 },
      "100%": { opacity: 1 },
    },

    animationShowingKeyFrames3: {
      "30%": { opacity: 0.4 },
      "40%": { opacity: 0.6 },
      "50%": { opacity: 0.8 },
      "75%": { opacity: 0.9 },
      "100%": { opacity: 1 },
    },

    animationShowingKeyFrames4: {
      "45%": { opacity: 0.4 },
      "55%": { opacity: 0.6 },
      "68%": { opacity: 0.8 },
      "75%": { opacity: 0.9 },
      "100%": { opacity: 1 },
    },

    slowAnimationShowingKeyFrames1: {
      "0%": { opacity: 1.0 },
      "10%": { opacity: 1.0 },
      "25%": { opacity: 0.0 },
      "50%": { opacity: 0.3 },
      "75%": { opacity: 0.7 },
      "100%": { opacity: 1 },
    },

    slowAnimationShowingKeyFrames2: {
      "0%": { opacity: 1.0 },
      "15%": { opacity: 1.0 },
      "25%": { opacity: 0.0 },
      "50%": { opacity: 0.5 },
      "75%": { opacity: 0.8 },
      "100%": { opacity: 1 },
    },

    slowAnimationShowingKeyFrames3: {
      "0%": { opacity: 1.0 },
      "20%": { opacity: 1.0 },
      "35%": { opacity: 0.0 },
      "50%": { opacity: 0.5 },
      "75%": { opacity: 0.7 },
      "100%": { opacity: 1 },
    },

    slowAnimationShowingKeyFrames4: {
      "0%": { opacity: 1.0 },
      "25%": { opacity: 1.0 },
      "45%": { opacity: 0.0 },
      "68%": { opacity: 0.5 },
      "75%": { opacity: 0.7 },
      "100%": { opacity: 1 },
    },

    slowAnimationShowingKeyFrames5: {
      "0%": { opacity: 1.0 },
      "30%": { opacity: 1.0 },
      "50%": { opacity: 0.0 },
      "70%": { opacity: 0.5 },
      "80%": { opacity: 0.7 },
      "100%": { opacity: 1 },
    },

    slowAnimationShowingKeyFrames6: {
      "0%": { opacity: 1.0 },
      "35%": { opacity: 1.0 },
      "55%": { opacity: 0.0 },
      "70%": { opacity: 0.5 },
      "85%": { opacity: 0.7 },
      "100%": { opacity: 1 },
    },

    slowAnimationShowingKeyFrames7: {
      "0%": { opacity: 1.0 },
      "40%": { opacity: 1.0 },
      "60%": { opacity: 0.0 },
      "75%": { opacity: 0.5 },
      "90%": { opacity: 0.7 },
      "100%": { opacity: 1 },
    },

    scaleKeyFrames4: {
      "0%, 100%": { transform: "rotate(-1deg)" },
      "50%": { transform: "rotate(1deg)" },
    },

    scaleKeyFrames5: {
      "0%": { transform: "scale(0.98)" },
      "25%": { transform: "scale(0.99)" },
      "50%": { transform: "scale(1)" },
      "75%": { transform: "scale(0.99)" },
      "100%": { transform: "scale(0.98)" },
    },

    smallBounce: {
      "0%, 100%": { transform: "translateY(0.2rem) rotate(0deg)" },
      "50%": { transform: "translateY(0rem) rotate(0deg)" },
    },

    middleBounce: {
      "0%, 100%": { transform: "translateY(1rem) rotate(0deg)" },
      "50%": { transform: "translateY(0rem) rotate(0deg)" },
    },

    headShake: {
      "0%": { transform: "translateX(0)" },
      "6.5%": {
        transform: "translateX(-6px) rotateY(-9deg)",
      },
      "18.5%": {
        transform: "translateX(5px) rotateY(7deg)",
      },
      "31.5%": {
        transform: "translateX(-3px) rotateY(-5deg)",
      },
      "43.5%": {
        transform: "translateX(2px) rotateY(3deg)",
      },
      "50%": { transform: "translateX(0)" },
    },

    animationShowingKeyWithWidthFrames1: {
      "10%": { opacity: 0.4, width: "0%" },
      "25%": { opacity: 0.6, width: "25%" },
      "50%": { opacity: 0.8, width: "50%" },
      "75%": { opacity: 0.9, width: "75%" },
      "100%": { opacity: 1, width: "100%" },
    },

    modalMoving: {
      "0%": { transform: "translateY(50%)" },
      "100%": { transform: "translateY(0)" },
    },

    modalMovingFromRight: {
      "0%": { transform: "translateX(40%)" },
      "100%": { transform: "translateX(0)" },
    },

    modalMovingFromBottom: {
      "0%": { transform: "translateY(150%)" },
      "100%": { transform: "translateY(0)" },
    },
  },
  transitionProperty: {
    width: "width",
  },

  animation: {
    authLeft: "authLeft 2s linear",
    authRight: "authRight 2s linear",
    showRight: "showRight 2s linear",
    fastShowing: "showingOriginalAnimation 0.2s linear",
    middleShowing: "showingOriginalAnimation 0.4s linear",

    originalShowing: "showingOriginalAnimation 0.8s linear",
    showing1: "animationShowingKeyFrames1 0.8s linear",
    showing2: "animationShowingKeyFrames2 0.8s linear",
    showing3: "animationShowingKeyFrames3 0.8s linear",
    showing4: "animationShowingKeyFrames4 0.8s linear",
    slowShowing1: "slowAnimationShowingKeyFrames1 1.0s linear",
    slowShowing2: "slowAnimationShowingKeyFrames2 1.1s linear",
    slowShowing3: "slowAnimationShowingKeyFrames3 1.2s linear",
    slowShowing4: "slowAnimationShowingKeyFrames4 1.3s linear",
    slowShowing5: "slowAnimationShowingKeyFrames5 1.4s linear",
    slowShowing6: "slowAnimationShowingKeyFrames6 1.5s linear",
    slowShowing7: "slowAnimationShowingKeyFrames7 1.8s linear",
    showingScale: "scaleKeyFrames5 2s linear infinite",
    wiggle: "scaleKeyFrames4 1s ease-in-out infinite",
    headShake: "headShake 2s infinite",
    smallBounce: "smallBounce 2s infinite linear",
    middleBounce: "middleBounce 2s infinite linear",
    menuWidth: "width 0.5s ease-in-out, visibility 1s linear",
    animationShowingKeyWithWidthFrames1:
      "animationShowingKeyWithWidthFrames1 0.5s ease-in-out",
    modalMoving: "modalMoving 0.4s ease-in-out",
    modalMovingFromRight: "modalMovingFromRight 0.4s ease-in-out",
    modalMovingFromBottom: "modalMovingFromBottom 0.4s ease-in-out",
  },

  screens: {
    //four views
    //1.phone is default
    //2.tablet
    //3.laptop
    //4.desktop
    tablet: "768px",
    laptop: "1280px",
    desktop: "1920px",
  },
};
