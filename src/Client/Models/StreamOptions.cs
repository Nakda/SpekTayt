public class StreamOptions
{
    public enum StreamResolution
    {
        HD_720p = 720,
        FHD_1080p = 1080,
        UHD_4K = 2160
    }

    public enum StreamFrameRate
    {
        Low = 30,
        Medium = 60,
        High = 144
    }

    public StreamResolution Resolution { get; set; }
    public StreamFrameRate FrameRate { get; set; }

    public StreamOptions()
    {
        Resolution = StreamResolution.HD_720p;
        FrameRate = StreamFrameRate.Low;
    }
}