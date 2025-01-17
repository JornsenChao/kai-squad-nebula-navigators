const styles = {
  mainGridProps: {
    container: true,
    item: true,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: 5,
    px: { laptop: 4, desktop: 5, desktopMedium: 6 },
    py: { laptop: 1, desktop: 1.5, desktopMedium: 2 },
  },
  errorContainer: {
    container: true,
    justifyContent: 'center',
    alignItems: 'center',
    style: { height: '100vh', textAlign: 'center' },
  },
  errorTitle: {
    variant: 'h4',
    fontWeight: 'bold',
  },
  errorMessage: {
    variant: 'body1',
    color: 'error',
  },
};

export default styles;
