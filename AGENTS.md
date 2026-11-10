# Architecture rules

- The home page owns intro visibility; IntroScreen requests entry and reports exit completion so the main content mounts after the exit animation.
- Bundle custom font files locally and declare them in global CSS so typography remains available on relative-base static hosts.