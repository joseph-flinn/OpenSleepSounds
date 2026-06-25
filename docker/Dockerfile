FROM reactnativecommunity/react-native-android:v21.0

# Create a non-root user and group
ARG USERNAME=appuser
ARG USER_UID=1000

RUN useradd --uid $USER_UID --gid 100 -m $USERNAME \
    # Give the user ownership of common build directories
    && mkdir -p /home/$USERNAME/.android \
    && chown -R $USERNAME:100 /home/$USERNAME

# Switch to the non-root user
USER $USERNAME

# Set working directory
WORKDIR /home/$USERNAME/app
