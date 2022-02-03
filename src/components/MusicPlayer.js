import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Image,
  FlatList,
  Animated,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import Slider from "@react-native-community/slider";
import { Audio, Video } from "expo-av";
import Color from "../../constant/Color";
import songs from "../../data/music-data";
import { set } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const MusicPlayer = () => {
  const scrollx = useRef(new Animated.Value(0)).current;
  const [songIndex, setSongIndex] = useState(0);
  const songSlider = useRef(null);

  const [playbackObj, setPlaybackObj] = useState(null);
  const [soundObj, setSoundObj] = useState(null);
  const [currentTrack, setCurrentTrack] = useState({});
  const [trackPlaying, setTrackPlaying] = useState(false);
  const [playTime, setPlayTime] = useState(0);
  const [playbackPostion, setPlaybackPosition] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);

  const calculateSeekbar = () => {
    if (playbackPostion !== null && playTime !== null) {
      return playbackPostion / playTime;
    }
  };

  useEffect(() => {
    scrollx.addListener(({ value }) => {
      const index = Math.round(value / width);
      setSongIndex(index);
    });
    return () => {
      scrollx.removeAllListeners;
    };
  }, []);

  renderPlayPause = (trackPlaying) => {
    if (trackPlaying) {
      return (
        <Ionicons
          name="ios-pause-circle"
          size={75}
          color={Color.musicControlBtn}
        />
      );
    } else {
      return (
        <Ionicons
          name="ios-play-circle"
          size={75}
          color={Color.musicControlBtn}
        />
      );
    }
  };

  // renderPlayTime = (playTime) => {
  //   if (playTime === 0) {
  //     return;
  //   } else {
  //     min = Math.floor((playTime / 1000 / 60) << 0);
  //     sec = Math.floor((playTime / 1000) % 60);
  //     return `${min}:${sec}`;
  //   }
  // };

  handlePlayButton = async (audio) => {
    //playing audio for first time
    if (soundObj === null) {
      const playbackObj = new Audio.Sound();
      const status = await playbackObj.loadAsync(
        {
          uri: audio.uri,
        },
        { shouldPlay: true }
      );
      playbackObj.setOnPlaybackStatusUpdate(onPlaybackUpdateStatus);
      return (
        setPlayTime(parseInt(status.durationMillis)),
        setPlaybackObj(playbackObj),
        setSoundObj(status),
        setCurrentTrack(audio),
        setTrackPlaying(true)
      );
    }

    //pause the audio
    if (
      soundObj.isLoaded &&
      soundObj.isPlaying &&
      currentTrack.uri === audio.uri
    ) {
      const status = await playbackObj.setStatusAsync({ shouldPlay: false });
      return setSoundObj(status), setTrackPlaying(false);
    }

    //resume the audio
    if (
      soundObj.isLoaded &&
      !soundObj.isPlaying &&
      currentTrack.uri === audio.uri
    ) {
      const status = await playbackObj.playAsync();
      return setSoundObj(status), setTrackPlaying(true);
    }
  };

  onPlaybackUpdateStatus = (playbackStatus) => {
    if (playbackStatus.isLoaded && playbackStatus.isPlaying) {
      setPlaybackPosition(playbackStatus.positionMillis);
    }
    // if (playbackStatus.didJustFinished) {
    //   await handleForwardButton(songs[songIndex + 1]);
    // }
  };

  handleForwardButton = async (audio) => {
    if (songIndex + 1 < songs.length) {
      songSlider.current.scrollToOffset({
        offset: (songIndex + 1) * width,
      });
      // //playing audio for first time
      if (soundObj === null) {
        const playbackObj = new Audio.Sound();
        const status = await playbackObj.loadAsync(
          {
            uri: audio.uri,
          },
          { shouldPlay: true }
        );
        return (
          setPlayTime(parseInt(status.durationMillis)),
          setPlaybackObj(playbackObj),
          setSoundObj(status),
          setCurrentTrack(audio),
          setTrackPlaying(true)
        );
      }

      //stopping previous current track and playing next track
      if (soundObj.isLoaded && currentTrack.uri !== audio.uri) {
        await playbackObj.stopAsync();
        await playbackObj.unloadAsync();
        const status = await playbackObj.loadAsync(
          { uri: audio.uri },
          { shouldPlay: true }
        );
        return (
          setPlayTime(parseInt(status.durationMillis)),
          setPlaybackObj(playbackObj),
          setSoundObj(status),
          setCurrentTrack(audio),
          setTrackPlaying(true)
        );
      }
    }
  };

  handlePreviousButton = async (audio) => {
    if (songIndex - 1 >= 0) {
      songSlider.current.scrollToOffset({
        offset: (songIndex - 1) * width,
      });
      // //playing audio for first time
      if (soundObj === null) {
        const playbackObj = new Audio.Sound();
        const status = await playbackObj.loadAsync(
          {
            uri: audio.uri,
          },
          { shouldPlay: true }
        );
        return (
          setPlayTime(parseInt(status.durationMillis)),
          setPlaybackObj(playbackObj),
          setSoundObj(status),
          setCurrentTrack(audio),
          setTrackPlaying(true)
        );
      }

      //stopping previous current track and playing next track
      if (soundObj.isLoaded && currentTrack.uri !== audio.uri) {
        await playbackObj.stopAsync();
        await playbackObj.unloadAsync();
        const status = await playbackObj.loadAsync(
          { uri: audio.uri },
          { shouldPlay: true }
        );
        return (
          setPlayTime(parseInt(status.durationMillis)),
          setPlaybackObj(playbackObj),
          setSoundObj(status),
          setCurrentTrack(audio),
          setTrackPlaying(true)
        );
      }
    }
  };

  const renderSongs = ({ index, item }) => {
    return (
      <Animated.View
        style={{ width: width, justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.artworkWrapper}>
          <Image source={item.image} style={styles.artworkImg} />
        </View>
      </Animated.View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={{ width: width }}>
          <Animated.FlatList
            ref={songSlider}
            data={songs}
            renderItem={renderSongs}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { x: scrollx },
                  },
                },
              ],
              { useNativeDriver: true }
            )}
          />
        </View>
        <View>
          <Text style={styles.title}>{songs[songIndex].title}</Text>
          <Text style={styles.artist}>{songs[songIndex].artist}</Text>
        </View>
        <View>
          <Slider
            style={styles.progressContainer}
            value={calculateSeekbar()}
            minimumValue={0}
            maximumValue={1}
            thumbTintColor={Color.musicProgressBar}
            minimumTrackTintColor={Color.musicProgressBar}
            maximumTrackTintColor="#fff"
            onValueChange={(value) => {
              setCurrentTime(value);
            }}
            onSlidingStart={async () => {
              if (!soundObj.isPlaying) {
                return;
              }
              try {
                await playbackObj.setStatusAsync({ shouldPlay: false });
                setTrackPlaying(false);
              } catch (err) {
                console.log(err);
              }
            }}
            onSlidingComplete={async (value) => {
              if (soundObj === null) {
                return;
              }

              try {
                const status = await playbackObj.setPositionAsync(
                  soundObj.durationMillis * value
                );
                setSoundObj(status);
                setPlaybackPosition(status.positionMillis);
                await playbackObj.setStatusAsync({ shouldPlay: true });
                setTrackPlaying(true);
              } catch (err) {
                console.log(err);
              }
            }}
          />
        </View>
        <View style={styles.musicControls}>
          <TouchableOpacity
            onPress={() => {
              handlePreviousButton(songs[songIndex - 1]);
            }}
          >
            <Ionicons
              name="play-skip-back-outline"
              size={35}
              color={Color.musicControlBtn}
              style={{ marginTop: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handlePlayButton(songs[songIndex]);
            }}
          >
            {renderPlayPause(trackPlaying)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleForwardButton(songs[songIndex + 1]);
            }}
          >
            <Ionicons
              name="play-skip-forward-outline"
              size={35}
              color={Color.musicControlBtn}
              style={{ marginTop: 25 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.bottomControls}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart-outline" size={30} color={Color.musicIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="repeat" size={30} color={Color.musicIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="ellipsis-horizontal"
              size={30}
              color={Color.musicIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.musicBg,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  artworkWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25,
    shadowColor: "#fff",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  artworkImg: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "200",
    textAlign: "center",
    color: "#EEEEEE",
  },
  artist: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#EEEEEE",
  },
  progressContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: "row",
  },
  progressLabelContainer: {
    width: 340,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ProgressLabelTxt: {
    color: "#fff",
  },
  musicControls: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    marginTop: 15,
  },
  bottomContainer: {
    borderTopColor: Color.musicBottomBorder,
    borderTopWidth: 1,
    width: width,
    alignItems: "center",
    paddingVertical: 15,
  },
  bottomControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});

export default MusicPlayer;
