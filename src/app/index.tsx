<<<<<<< HEAD
import * as Device from 'expo-device';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            Welcome to&nbsp;Expo
          </ThemedText>
        </ThemedView>

        <ThemedText type="code" style={styles.code}>
          get started
        </ThemedText>

        <ThemedView type="backgroundElement" style={styles.stepContainer}>
          <HintRow
            title="Try editing"
            hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
          />
          <HintRow title="Dev tools" hint={getDevMenuHint()} />
          <HintRow
            title="Fresh start"
            hint={<ThemedText type="code">npm run reset-project</ThemedText>}
          />
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
=======
import ProfileCard from "@/components/profile-card";
import { StatusBar } from "expo-status-bar";
import {
    ScrollView,
    StyleSheet,
} from "react-native";

export default function App() {
    return (
        <ScrollView contentContainerStyle={styles.screen}>

            <StatusBar style="dark" />

            {/* First card — your own data */}
            <ProfileCard
                name="Monami Maymuna"
                studentId="23-54885-3"
                department="Computer Science — AIUB"
                bio="Passionate about mobile development and building tools that make everyday life easier."
                skills={[
                    "React Native",
                    "JavaScript",
                    "Node.js",
                    "PostgreSQL",
                ]}
            />

            {/* Second card — a classmate's data */}
            <ProfileCard
                name="Rakib Rahman"
                studentId="22-67890-2"
                department="Computer Science — AIUB"
                bio="Interested in AI and full-stack web development. Loves competitive programming."
                skills={[
                    "Python",
                    "Machine Learning",
                    "React",
                    "Django",
                ]}
            />

            {/* Third card — no skills */}
            <ProfileCard
                name="Saad Al Rafi"
                studentId="22-54321-3"
                department="Computer Science — AIUB"
                bio="Aspiring software engineer with a passion for mobile apps and UI/UX design."
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#F0F4F8",

        alignItems: "center",

        paddingTop: 60,
        paddingBottom: 40,
    },
});
>>>>>>> de540c0cfc321449465d38bef05bfbab9037b67f
