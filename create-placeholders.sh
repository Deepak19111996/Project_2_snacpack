#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p images

# Check if ImageMagick is installed
if command -v convert &> /dev/null; then
    echo "Using ImageMagick to create placeholder images..."
    
    # Generate partner logos
    for i in {1..10}; do
        convert -size 200x100 xc:#F0F0F0 -gravity center -pointsize 20 -annotate 0 "Partner $i" images/partner-$i.png
        echo "Created images/partner-$i.png"
    done
    
    # Generate UPI logo
    convert -size 60x30 xc:#5F259F -gravity center -pointsize 12 -fill white -annotate 0 "UPI" images/upi-logo.png
    echo "Created images/upi-logo.png"
    
    echo "All placeholder images created successfully!"
else
    echo "ImageMagick is not installed. Please install it or use the create-placeholder-images.html file to create screenshots."
    echo "To install ImageMagick:"
    echo "  - On macOS: brew install imagemagick"
    echo "  - On Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "  - On CentOS/RHEL: sudo yum install imagemagick"
fi
