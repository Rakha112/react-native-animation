# React Native Custom Range Slider

Create Custom Range Slider in React Native using [Reanimated 2](https://docs.swmansion.com/react-native-reanimated/)

## Demo

Custom Range Slider Demo

![Demo1](https://github.com/Rakha112/react-native-animation/blob/main/src/05-React-Native-Custom-Range-Slider/Demo1.gif)

Demo on Android (Left) and Ios (Rigth)

![Demo2](https://github.com/Rakha112/react-native-animation/blob/main/src/05-React-Native-Custom-Range-Slider/Demo2.gif)

## Properties

| Name            | Description                       | Type                                                                       | Default Value |
| :-------------- | :-------------------------------- | :------------------------------------------------------------------------- | :------------ |
| `min`           | Minimum value of slider           | number                                                                     | **Required**  |
| `max`           | Maximum value of slider           | number                                                                     | **Required**  |
| `step`          | Step of slider                    | number                                                                     | **Required**  |
| `onValueChange` | Will be called when a slider stop | onValueChange={range => {setMinValue(range.min); setMaxValue(range.max);}} | **Required**  |

## Run Locally

Clone the project

```bash
  git clone https://github.com/Rakha112/react-native-custom-range-slider.git
```

Go to the project directory

```bash
  cd react-native-custom-range-slider
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start -- --reset-cache
```

Run on IOS

```bash
  npx pod-install
  npx react-native run-ios
```

Run on ANDROID

```bash
  npx react-native run-android
```
