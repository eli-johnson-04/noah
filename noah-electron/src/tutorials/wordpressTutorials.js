const wordpressTutorials = [
    { label: 'Add Media Gallery',
        sections: [
            {
                type: 'header',
                content: 'How to Add Another Gallery to the Media Page'
            },
            {
                type: 'text',
                content: 'Log in to the WordPress dashboard, and navigate to "Appearance" on the left sidebar. Hover over it, and click "Editor". This will open Gutenberg, the native WordPress editor. Once the editor shows up, click "Pages", then scroll down and click on "Media", then the pencil icon to the right of the name of the page.'
            },
            {
                type: 'text',
                content: 'Click the three descending lines in the top left, next to the arrows, to show the webpage tree. The webpage tree is a hieracrchical structure that shows how elements are nested and organized. If an element is underneath another AND slightly to the right, it is owned by the one above it. Your screen should look similar to this:'
            },
            {
                type: 'image',
                src: '/images/wordpress/add-media-gallery/editor-media.png'
            },
            {
                type: 'subheading',
                content: 'Adding a Gallery from Pattern'
            },
            {
                type: 'text',
                content: 'Click the small arrows to the left of "Content" and "Stack" in the webpage tree. You should now see all of the galleries on the page. In the image above, there should be three: "Poster Campaign", "School Sensitization Program", and "Donations".'
            },
            {
                type: 'text',
                content: 'You must decide where you would like to add the gallery. For this tutorial, we will add it after the Poster Campaign gallery. Right click the Media Accordion in the webpage tree that highlights "Poster Campaign" on the page, and click "Add After".'
            },
            {
                type: 'image',
                src: '/images/wordpress/add-media-gallery/editor-media-add-after.png'
            },
            {
                type: 'text',
                content: 'There should now be a "Paragraph" block on the page under the Poster Campaign gallery. Click the small plus symbol on the right of the webpage where the paragraph block has shown up, and then click "Browse All". Click "Patterns" on the webpage tree, and then "My Patterns". Click "Media Accordion".'
            },
            {
                type: 'subheading',
                content: 'Editing the Pattern'
            },
            {
                type: 'text',
                content: 'Click somewhere on the Media page to exit the webpage tree. Click somewhere on the new accordion, then click the three dots, and click "Detach". This will separate the elements of the pattern into editable parts without changing their style or structure.'
            },
            {
                type: 'text',
                content: 'Click again on the webpage tree in the top left, with the three descending lines. The new accordion should already be highlighted. Click its small arrow on the left, then the arrow for "Section", "Photos Accordion", "Videos Accordion", and "Video Container".'
            },
            {
                type: 'text',
                content: 'Click where it says "Section" to edit the name of the new gallery and begin typing. For this tutorial, we will call it "New Gallery". Delete the old name, and click away from the accordion to deselect it.'
            },
            {
                type: 'image',
                src: '/images/wordpress/add-media-gallery/editor-new-gallery.png'
            },
            {
                type: 'text',
                content: 'Now, you can decide if you would like to use a Photo Gallery, a Video Gallery, or both. If you do not want one of them, right click the corresponding Accordion and click "Delete". For this tutorial, we will show how to use both.'
            },
            {
                type: 'text',
                content: 'To add images to the gallery, click the "Gallery" element. New options, "Upload" and "Media Library" should show up on the page view. You can choose to upload images from your computer, or to use the media library for the website. For our purposes, we will use random photos from the media library.'
            },
            {
                type: 'text',
                content: 'Click "Media Library", then choose the photos you want. We will select nine photos for this tutorial.'
            },
            {
                type: 'image',
                src: '/images/wordpress/add-media-gallery/editor-media-library.png'
            },
            {
                type: 'text',
                content: 'Click "Create a new gallery", then "Insert gallery". This will add the gallery images to the accordion, and they will also be visible in the webpage tree. Now click "YouTube" in the webpage tree. If you would like to use multiple videos, you can right click the YouTube element, then click "Duplicate". Gather the URL(s) you would like, and paste them into each video box on the webpage viewer. Click embed. Congrats! You have added a new gallery and (a) video(s) to the Media page.'
            },
            {
                type: 'subheading',
                content: 'Publishing the Page'
            },
            {
                type: 'text',
                content: 'Click "Save" at the top right of the screen. Confirm the save if a pop-up shows up, and wait for the changes to save. You can now return to the dashboard.'
            },
            {
                type: 'subheading',
                content: 'Previous Versions'
            },
            {
                type: 'text',
                content: 'In the event you make a mistake, do not worry. Click on "Pages" on the left sidebar, and scroll down to the Media page. Hover over it and click "Edit". Navigate to the right side of the screen where it says "Publish" with a button "Preview Changes", and click "Browse" next to where it says "Revisions". Your screen should look like this: '
            },
            {
                type: 'image',
                src: '/images/wordpress/add-media-gallery/revisions.png'
            },
            {
                type: 'text',
                content: 'If you need to revert changes, click "Previous" on the left side of the screen as many times as necessary, then "Restore This Revision" to revert the changes to a previous version.'
            },
            {
                type: 'subheading',
                content: 'Congratulations!'
            },
            {
                type: 'text',
                content: 'You have added a new media gallery, and updated the live page. Go to the top of the dashboard where it says "The Ark Foundation, Ghana", hover, and click "Visit Site". Once it loads, click "Media" from the homepage, and see your new changes, live and visible to the world!'
            },
        ]
    },
    { label: 'Update Our Patrons',
        sections: [
            {
                type: 'header',
                content: 'How to Update Our Patrons Page'
            },
            {
                type: 'text',
                content: 'Log in to the WordPress dashboard, and click to "Pages" on the left sidebar.'
            },
            {
                type: 'text',
                content: 'Scroll until you find the given page, in this case Our Patrons. Hover over it and click on "Edit with Visual Composer" that will appear right under it as you can see in the image below:'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-our-patrons/1.all pages.png'
            },
            {
                type: 'subheading',
                content: 'Cloning a bio card'
            },
            {
                type: 'text',
                content: 'Once the page is opened, in order to add another bio card to the page, hover over the last bio card until a small green rectangle appears. Click the third option from the left (clone). You will see that the last bio card will be duplicated. See image below for instruction: '
            },
            {
                type: 'image',
                src: '/images/wordpress/update-our-patrons/2.clone bio card.png'
            },
            {
                type: 'subheading',
                content: 'Editing the newly added bio card'
            },
            {
                type: 'text',
                content: 'Hover over the newly added bio card (the last one) and click on pencil icon on the green rectangle box that appears. On the sidebar that apears in the left, start with editing the name of the new team member. Than edit the bio text. See image below: '
            },
            {
                type: 'image',
                src: '/images/wordpress/update-our-patrons/3.edit bio card.png'
            },
            {
                type: 'subheading',
                content: 'Replacing the image of the newly added bio card'
            },
            {
                type: 'text',
                content: 'After you finish editing the bio text, click once the image on the left sidebar. Once the image is selected, click on the "Add Media" button on the top left corner of the sidebar (see first image below). A window will open that will allow you to select an image from the media gallery (see second image below). Select the image and click on the "Insert into page" button on the bottom right corner of the page.'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-our-patrons/4.edit image.png'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-our-patrons/5.upload new image.png'
            },
            {
                type: 'subheading',
                content: 'Format the newly added image to fit into the bio card'
            },
            {
                type: 'text',
                content: 'When you upload the new image, you will notice that the image will not fit perfectly into the bio card. To fix this, select the image you just added on the left sidebar and click on the pencil symbol that appears right above it. This will open a new page (see image below). On the new page look for the box titled Image CSS Class. On the box type "patron-img" and then click on update on the bottom right corner of the page. This completes the bio card editing'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-our-patrons/8.apply classes to image.png'
            },
            
        ]
    },
    { label: 'Update Board of Directors',
        sections: [
            {
                type: 'header',
                content: 'How to Update Board of Directors Page'
            },
            {
                type: 'text',
                content: 'Log in to the WordPress dashboard, and click to "Pages" on the left sidebar.'
            },
            {
                type: 'text',
                content: 'Scroll until you find the given page, in this case Board of Directors. Hover over it and click on "Edit with Visual Composer" that will appear right under it as you can see in the image below:'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-board-of-directors/2.All Pages.png'
            },
            {
                type: 'subheading',
                content: 'Editing the first block (First, Second and Third Board Members).'
            },
            {
                type: 'text',
                content: 'Once the page is opened, in order to edit the First, Second and Third Board members, hover over the sectio until a small green rectangle appears (See first image below). If you click the pencil icon, a sidebar will appear on the left taht will allow you to edit the team members (See second image below). '
            },
            {
                type: 'image',
                src: '/images/wordpress/update-board-of-directors/3.Edit page.png'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-board-of-directors/4.Edit first block.png'
            },
            {
                type: 'subheading',
                content: 'Cloning a bio card'
            },
            {
                type: 'text',
                content: 'In order to add another bio card to the page, hover over the last bio card until a small green rectangle appears. Click the third option from the left (clone). You will see that the last bio card will be duplicated. See image below for instruction: '
            },
            {
                type: 'image',
                src: '/images/wordpress/update-board-of-directors/5.Duplicate team member bio card.png'
            },
            {
                type: 'subheading',
                content: 'Editing the newly added bio card'
            },
            {
                type: 'text',
                content: 'Hover over the newly added bio card (the last one) and click on pencil icon on the green rectangle box that appears. On the sidebar that apears in the left, start with editing the name of the new team member. Than edit the bio. See image below'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-board-of-directors/6.Edit duplicated card.png'
            },
            {
                type: 'subheading',
                content: 'Replacing the image of the newly added bio card'
            },
            {
                type: 'text',
                content: 'After you finish editing the bio text, click once the image on the left sidebar. Once the image is selected, click on the "Add Media" button on the top left corner of the sidebar (see first image below). A window will open that will allow you to select an image from the media gallery (see second image below). Select the image and click on the "Insert into page" button on the bottom right corner of the page.'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-board-of-directors/7.Update image of duplicated card.png'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-board-of-directors/8.Upload new image.png'
            },
            {
                type: 'subheading',
                content: 'Format the newly added image to fit into the bio card'
            },
            {
                type: 'text',
                content: 'When you upload the new image, you will notice that the image will not fit perfectly into the bio card. To fix this, select the image you just added on the left sidebar and click on the pencil symbol that appears right above it. This will open a new page (see image below). On the new page look for the box titled Image CSS Class. On the box type "board-member-img " and then click on update on the bottom right corner of the page. This completes the bio card editing'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-board-of-directors/10.Apply classes to image.png'
            },
            
        ]
    },
    { label: 'Update About Us',
        sections: [
            {
                type: 'header',
                content: 'How to Update About Us Page'
            },
            {
                type: 'text',
                content: 'Log in to the WordPress dashboard, and click to "Pages" on the left sidebar.'
            },
            {
                type: 'text',
                content: 'Scroll until you find the given page, in this case About Us. Hover over it and click on "Edit with Visual Composer" that will appear right under it as you can see in the image below:'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-about-us/All Pages.png'
            },
            {
                type: 'subheading',
                content: 'Editing the first block.'
            },
            {
                type: 'text',
                content: 'Once the page is opened, in order to edit the first block, hover over the section until a small green rectangle appears (See first image below). If you click the pencil icon, a sidebar will appear on the left taht will allow you to edit the team members (See second image below). '
            },
            {
                type: 'image',
                src: '/images/wordpress/update-about-us/1.Edit first block.png'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-about-us/2.Edit text.png'
            },
            {
                type: 'subheading',
                content: 'Edit an existing card'
            },
            {
                type: 'text',
                content: 'In order to edit an existing card, hover over it until a small green rectangle appears. If you click the pencil icon, a sidebar will appear on the left that will allow you to edit the content of the card. See image below: '
            },
            {
                type: 'image',
                src: '/images/wordpress/update-about-us/3.Edit existing card.png'
            },
            {
                type: 'subheading',
                content: 'Add more cards'
            },
            {
                type: 'text',
                content: 'To add more cards, click on the "+" icon on the top left corner of the page (see first image). On the sidebar that appears, select templates and then click on "Card" to add a new card on the bottom of the existing card (see second image below)'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-about-us/4.Add more cards.png'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-about-us/5.Add existing template.png'
            },
            {
                type: 'subheading',
                content: 'Resize the newly added card'
            },
            {
                type: 'text',
                content: 'After adding the new card to the page, you will se that it will initially occupy the entire row. If you do not want to add more cards in that row and you want to resize the newly added card, point your mouse on the left/right corner of the card and resize to your liking. See image below: '
            },
            {
                type: 'image',
                src: '/images/wordpress/update-about-us/7.Resize added card.png'
            },
            {
                type: 'subheading',
                content: 'Add more cards on the same row'
            },
            {
                type: 'text',
                content: 'In order to add more cards to the same row you added the new card, hover over the newly added card until you see a blue rectangle on the top left corner of the card. Hover over the blue rectangle until you see a scroll down menu. On the menu, select Add Column (see first image below). This way you added a new column to the row (see second image below). You can add more columns based on your design needs.'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-about-us/8.Add more cards on same row.png'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-about-us/9.Two column row.png'
            },
            {
                type: 'text',
                content: 'To esaily add a new card in the column you just added, initially right click on the existing card on the right and select copy on the meny that appears (see first image below). Now you right click on the mepty column on the right and selct paste (see second image bleow). After completing these steps, you can edit these cards by repeating the same steps you took at the beginning of this tutorial.'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-about-us/10.Copy card on the left.png'
            },
            {
                type: 'image',
                src: '/images/wordpress/update-board-of-directors/11.Paste card to the right column.png'
            },
            
        ]
    },
];

export default wordpressTutorials;