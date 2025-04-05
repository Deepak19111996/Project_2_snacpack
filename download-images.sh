#!/bin/bash

# Create directories if they don't exist
mkdir -p images

# Download product images
echo "Downloading product images..."
curl -o images/product-1.jpg https://source.unsplash.com/random/600x400/?food,container
curl -o images/product-2.jpg https://source.unsplash.com/random/600x400/?coffee,cup
curl -o images/product-3.jpg https://source.unsplash.com/random/600x400/?paper,bag
curl -o images/product-4.jpg https://source.unsplash.com/random/600x400/?cutlery
curl -o images/product-5.jpg https://source.unsplash.com/random/600x400/?food,tray
curl -o images/product-6.jpg https://source.unsplash.com/random/600x400/?drink,cup
curl -o images/product-7.jpg https://source.unsplash.com/random/600x400/?branded,bag
curl -o images/product-8.jpg https://source.unsplash.com/random/600x400/?bamboo,cutlery
curl -o images/product-9.jpg https://source.unsplash.com/random/600x400/?transparent,container
curl -o images/product-10.jpg https://source.unsplash.com/random/600x400/?coffee,cup,ripple
curl -o images/product-11.jpg https://source.unsplash.com/random/600x400/?napkin,tissue
curl -o images/product-12.jpg https://source.unsplash.com/random/600x400/?dinner,napkin

# Download product detail images
echo "Downloading product detail images..."
curl -o images/product-1-2.jpg https://source.unsplash.com/random/600x400/?eco,container
curl -o images/product-1-3.jpg https://source.unsplash.com/random/600x400/?biodegradable,container
curl -o images/product-1-4.jpg https://source.unsplash.com/random/600x400/?takeaway,food

# Download hero and about images
echo "Downloading hero and about images..."
curl -o images/hero-bg.jpg https://source.unsplash.com/random/1920x1080/?food,packaging
curl -o images/about-header.jpg https://source.unsplash.com/random/1920x1080/?sustainable,packaging
curl -o images/about-story.jpg https://source.unsplash.com/random/800x600/?team,office

# Download team images
echo "Downloading team images..."
curl -o images/team-1.jpg https://source.unsplash.com/random/400x600/?indian,businessman
curl -o images/team-2.jpg https://source.unsplash.com/random/400x600/?indian,businesswoman
curl -o images/team-3.jpg https://source.unsplash.com/random/400x600/?indian,man,professional
curl -o images/team-4.jpg https://source.unsplash.com/random/400x600/?indian,woman,professional

# Download testimonial images
echo "Downloading testimonial images..."
curl -o images/testimonial-1.jpg https://source.unsplash.com/random/200x200/?indian,man,portrait
curl -o images/testimonial-2.jpg https://source.unsplash.com/random/200x200/?indian,woman,portrait
curl -o images/testimonial-3.jpg https://source.unsplash.com/random/200x200/?indian,businessman,portrait

# Download partner logos
echo "Downloading partner logos..."
curl -o images/partner-1.png https://via.placeholder.com/200x100.png?text=Partner+1
curl -o images/partner-2.png https://via.placeholder.com/200x100.png?text=Partner+2
curl -o images/partner-3.png https://via.placeholder.com/200x100.png?text=Partner+3
curl -o images/partner-4.png https://via.placeholder.com/200x100.png?text=Partner+4
curl -o images/partner-5.png https://via.placeholder.com/200x100.png?text=Partner+5
curl -o images/partner-6.png https://via.placeholder.com/200x100.png?text=Partner+6
curl -o images/partner-7.png https://via.placeholder.com/200x100.png?text=Partner+7
curl -o images/partner-8.png https://via.placeholder.com/200x100.png?text=Partner+8
curl -o images/partner-9.png https://via.placeholder.com/200x100.png?text=Partner+9
curl -o images/partner-10.png https://via.placeholder.com/200x100.png?text=Partner+10

# Download UPI logo
echo "Downloading UPI logo..."
curl -o images/upi-logo.png https://via.placeholder.com/60x30.png?text=UPI

echo "All images downloaded successfully!"
