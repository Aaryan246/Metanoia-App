import Category from "../models/Category";

export const SLEEPCAT = [
  new Category(
    "ss1",
    "Zen Mode",
    "#D9534F",
    "ZenMode",
    "https://cdn.pixabay.com/photo/2016/02/17/19/08/lotus-1205631_960_720.jpg"
  ),
  new Category(
    "ss2",
    "Sleep Player",
    "#FFEEAD",
    "SleepPlayer",
    "https://cdn.pixabay.com/photo/2019/05/08/21/21/cat-4189697_960_720.jpg"
  ),
];

export const MEDITATIONCAT = [
  new Category("ms1", "Sessions", "#D9534F", "MeditationSession"),
  new Category("ms2", "Workout", "#D9534F", "Workout"),
  new Category("ms3", "Spiritual", "#D9534F", "Spiritual"),
];

export const SELFCARECAT = [
  new Category("scs1", "Mood Tracker", "#D9534F", "MoodTracker"),
  new Category("scs2", "Diary", "#D9534F", "Diary"),
];
