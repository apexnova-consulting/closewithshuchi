# Guide for Uploading Custom Photos to the Website

## About Me Photo Replacement

To replace the photo in the About Me section with a photo of Shuchi:

1. **Prepare the photo**:
   - Choose a high-quality professional headshot or portrait of Shuchi
   - Recommended dimensions: at least 800x1000 pixels
   - Format: JPG or PNG
   - Optimize the image size (ideally under 300KB) to ensure fast loading

2. **Upload Options**:

   ### Option 1: Using the Public Folder (Simplest)
   
   1. Save your optimized image file with a descriptive name (e.g., `shuchi-portrait.jpg`)
   2. Copy the file to the `/public/images/` folder in your project
   3. Edit the `AboutSection.tsx` file to update the image path:
   
   ```tsx
   // In AboutSection.tsx, find the Image component and update the src
   <Image
     src="/images/shuchi-portrait.jpg"
     alt="Shuchi Alam"
     fill
     style={{ objectFit: 'cover' }}
   />
   ```

   ### Option 2: Using an External Image Hosting Service
   
   1. Upload your image to a service like Cloudinary, AWS S3, or ImageKit
   2. Get the URL of the uploaded image
   3. Edit the `AboutSection.tsx` file to update the image URL:
   
   ```tsx
   // In AboutSection.tsx, find the Image component and update the src
   <Image
     src="https://your-image-hosting-url.com/shuchi-portrait.jpg"
     alt="Shuchi Alam"
     fill
     style={{ objectFit: 'cover' }}
   />
   ```

## Other Image Replacements

For any other images you want to replace:

1. Follow the same preparation guidelines as above
2. Locate the specific component where the image is used
3. Update the image path or URL just like in the examples above

### Tips for Better Images

- Ensure all images have good lighting and professional quality
- For hero section images, use wider landscape images (1600x900 pixels or similar)
- For testimonial profile pictures, use square images (at least 300x300 pixels)
- Always optimize images to reduce file size without compromising visible quality
- Consider maintaining a consistent color scheme across all images to match the website's new color palette 