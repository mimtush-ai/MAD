import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Define the shape of the props our component expects
interface ProfileCardProps {
    name: string;
    studentId: string;
    department: string;
    bio: string;
}

// The component receives props as an object
// We destructure the props for clean code
export default function ProfileCard({
    name,
    studentId,
    department,
    bio,
}: ProfileCardProps) {

    // Build initials from the name prop
    const initials = name
        .split(" ")
        .map((word) => word[0])
        .join("");

    // NEW: State variable to keep track of whether
    // the user is following or not
    const [followed, setFollowed] = useState(false);

    // NEW: Function to toggle the followed state
    const handleFollow = () => {
        setFollowed(!followed);
    };

    return (
        <View style={styles.card}>

            {/* Avatar */}
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>{initials}</Text>
            </View>

            {/* Name */}
            <Text style={styles.name}>{name}</Text>

            {/* Student ID */}
            <Text style={styles.idBadge}>ID: {studentId}</Text>

            {/* Department */}
            <Text style={styles.role}>{department}</Text>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Bio */}
            <Text style={styles.bio}>{bio}</Text>

            {/* Follow Button */}
            <TouchableOpacity
                style={[
                    styles.button,
                    followed && styles.buttonFollowed
                ]}
                onPress={handleFollow}
            >
                <Text
                    style={[
                        styles.buttonText,
                        followed && styles.buttonTextFollowed
                    ]}
                >
                    {followed ? "Following ✓" : "Follow"}
                </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 28,
        width: "88%",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 4,
        marginBottom: 20,
    },

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

    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#0D1F4E",
        marginBottom: 2,
    },

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

    role: {
        fontSize: 14,
        color: "#64748B",
        marginBottom: 16,
    },

    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "#E2E8F0",
        marginBottom: 16,
    },

    bio: {
        fontSize: 14,
        color: "#64748B",
        textAlign: "center",
        lineHeight: 22,
    },

    // NEW: Follow button
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: "#0D9488",
        backgroundColor: "transparent",
    },

    // NEW: Button style when followed
    buttonFollowed: {
        backgroundColor: "#0D9488",
    },

    // NEW: Normal button text
    buttonText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#0D9488",
    },

    // NEW: Button text when followed
    buttonTextFollowed: {
        color: "#FFFFFF",
    },
});