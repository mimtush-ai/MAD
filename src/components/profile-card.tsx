import { useState } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// Define the shape of the props our component expects
interface ProfileCardProps {
    name: string;
    studentId: string;
    department: string;
    bio: string;
    skills?: string[]; // NEW: optional array of skills
}

// ProfileCard component
export default function ProfileCard({
    name,
    studentId,
    department,
    bio,
    skills,
}: ProfileCardProps) {

    // Build initials from the name
    const initials = name
        .split(" ")
        .map((word) => word[0])
        .join("");

    // Follow/unfollow state
    const [followed, setFollowed] = useState(false);

    // Toggle follow button
    const handleFollow = () => {
        setFollowed(!followed);
    };

    return (
        <View style={styles.card}>

            {/* Avatar */}
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                    {initials}
                </Text>
            </View>

            {/* Name */}
            <Text style={styles.name}>
                {name}
            </Text>

            {/* Student ID */}
            <Text style={styles.idBadge}>
                ID: {studentId}
            </Text>

            {/* Department */}
            <Text style={styles.role}>
                {department}
            </Text>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Bio */}
            <Text style={styles.bio}>
                {bio}
            </Text>

            {/* NEW: Skills section */}
            {skills && (
                <View style={styles.skillsContainer}>
                    {skills.map((skill, index) => (
                        <View
                            key={index}
                            style={styles.skillBadge}
                        >
                            <Text style={styles.skillText}>
                                {skill}
                            </Text>
                        </View>
                    ))}
                </View>
            )}

            {/* Follow button */}
            <TouchableOpacity
                style={[
                    styles.button,
                    followed && styles.buttonFollowed,
                ]}
                onPress={handleFollow}
            >
                <Text
                    style={[
                        styles.buttonText,
                        followed && styles.buttonTextFollowed,
                    ]}
                >
                    {followed ? "Following ✓" : "Follow"}
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    // Card
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 28,
        width: "88%",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,

        elevation: 4,
        marginBottom: 20,
    },

    // Avatar
    avatar: {
        width: 88,
        height: 88,
        borderRadius: 44,
        backgroundColor: "#0D9488",

        alignItems: "center",
        justifyContent: "center",

        marginBottom: 16,
    },

    avatarText: {
        color: "#FFFFFF",
        fontSize: 28,
        fontWeight: "bold",
    },

    // Name
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#0D1F4E",
        marginBottom: 2,
    },

    // Student ID
    idBadge: {
        fontSize: 12,
        color: "#0D9488",
        backgroundColor: "#E1F5EE",

        paddingHorizontal: 10,
        paddingVertical: 3,

        borderRadius: 20,
        marginBottom: 4,

        overflow: "hidden",
    },

    // Department
    role: {
        fontSize: 14,
        color: "#64748B",
        marginBottom: 16,
        textAlign: "center",
    },

    // Divider
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "#E2E8F0",
        marginBottom: 16,
    },

    // Bio
    bio: {
        fontSize: 14,
        color: "#64748B",
        textAlign: "center",
        lineHeight: 22,
    },

    // NEW: Skills container
    skillsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: 12,
        gap: 8,
    },

    // NEW: Individual skill badge
    skillBadge: {
        backgroundColor: "#EFF6FF",
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: "#BFDBFE",
    },

    // NEW: Skill text
    skillText: {
        fontSize: 12,
        color: "#1D4ED8",
        fontWeight: "500",
    },

    // Follow button
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 32,

        borderRadius: 24,

        borderWidth: 2,
        borderColor: "#0D9488",

        backgroundColor: "transparent",
    },

    // Followed button
    buttonFollowed: {
        backgroundColor: "#0D9488",
    },

    // Follow button text
    
    buttonText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#0D9488",
    },

    // Following button text
    buttonTextFollowed: {
        color: "#FFFFFF",
    },
});