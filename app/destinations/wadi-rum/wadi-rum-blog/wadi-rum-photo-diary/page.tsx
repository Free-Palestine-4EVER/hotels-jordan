import Image from "next/image"
import Link from "next/link"
import { jordanData } from "@/data/jordan"
import { notFound } from "next/navigation"

export default function BlogPost() {
  // Find Wadi Rum in the jordanData
  const wadiRum = jordanData.regions
    .flatMap((region) => region.destinations)
    .find((destination) => destination.slug === "wadi-rum")

  if (!wadiRum) {
    notFound()
  }

  // Find this specific blog post
  const blogPost = wadiRum.blogPosts.find((post) => post.slug === "wadi-rum-photo-diary")

  if (!blogPost) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link
            href="/destinations/wadi-rum/wadi-rum-blog"
            className="text-teal-600 hover:text-teal-700 transition-colors"
          >
            ← Back to Wadi Rum Blog
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>

        <div className="text-gray-500 mb-6">
          {blogPost.date} • by {blogPost.author}
        </div>

        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src={blogPost.image || "/placeholder.svg"}
            alt={blogPost.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl">{blogPost.excerpt}</p>

          <p>
            Wadi Rum is a photographer's paradise. The interplay of light and shadow across the red desert landscape
            creates ever-changing scenes of breathtaking beauty. From the golden glow of sunrise to the star-filled
            night skies, every moment offers new opportunities to capture something extraordinary. This photo diary
            guides you through the visual journey of Wadi Rum, with tips for capturing your own memorable images of this
            remarkable place.
          </p>

          <h2>Dawn: The Desert Awakens</h2>

          <div className="relative h-[500px] rounded-lg overflow-hidden my-8">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Sunrise over Wadi Rum with golden light illuminating the sandstone mountains"
              fill
              className="object-cover"
            />
          </div>

          <p>
            The day begins with a symphony of color as the first rays of sunlight touch the eastern faces of Wadi Rum's
            sandstone mountains. The transformation is magical—cold blue shadows give way to warm golden light that
            seems to set the rock ablaze. This is the "golden hour," beloved by photographers for its soft, directional
            light that brings out the texture and depth of the landscape.
          </p>

          <p>
            <strong>Photography tip:</strong> Set your alarm early—at least 45 minutes before sunrise. The pre-dawn blue
            hour offers its own ethereal quality, and you'll want to be in position before the first light hits the
            mountains. Look for compositions that include both illuminated peaks and areas still in shadow for maximum
            drama.
          </p>

          <div className="relative h-[500px] rounded-lg overflow-hidden my-8">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Desert floor with rippled sand patterns in early morning light"
              fill
              className="object-cover"
            />
          </div>

          <p>
            As the sun rises higher, it reveals the intricate patterns in the desert floor—ripples in the sand created
            by wind, animal tracks from the night's activities, and the delicate geometry of desert plants reaching for
            moisture. The low-angle light emphasizes these textures, turning the simple sand into a canvas of light and
            shadow.
          </p>

          <p>
            <strong>Photography tip:</strong> Get low to the ground to capture sand patterns. Use a wide-angle lens
            (16-24mm) to emphasize foreground textures while still including the dramatic backdrop of mountains. A
            polarizing filter can help reduce glare and enhance the rich red colors.
          </p>

          <h2>Morning: Desert Details</h2>

          <div className="relative h-[500px] rounded-lg overflow-hidden my-8">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Close-up of desert vegetation with mountains in the background"
              fill
              className="object-cover"
            />
          </div>

          <p>
            As morning progresses, the desert reveals its surprising diversity. Despite the harsh conditions, life finds
            a way to thrive in Wadi Rum. Hardy desert plants with deep root systems dot the landscape, providing
            splashes of green against the red sand. After rare rain showers, the desert can briefly bloom with
            wildflowers in a spectacular display of resilience.
          </p>

          <p>
            <strong>Photography tip:</strong> Use a medium telephoto lens (70-200mm) to isolate desert plants against
            the landscape. Try shooting with a wide aperture (f/2.8-f/4) to create a shallow depth of field that
            highlights the plant while keeping the mountains softly blurred in the background.
          </p>

          <div className="relative h-[500px] rounded-lg overflow-hidden my-8">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Ancient petroglyphs carved into sandstone rock face"
              fill
              className="object-cover"
            />
          </div>

          <p>
            Morning is also an excellent time to explore Wadi Rum's historical treasures. Throughout the desert, ancient
            petroglyphs and inscriptions tell the story of human presence dating back thousands of years. These
            carvings, found in sheltered canyon walls and rock faces, depict hunting scenes, camel caravans, and early
            written languages.
          </p>

          <p>
            <strong>Photography tip:</strong> When photographing petroglyphs, try different lighting angles to bring out
            the carvings. Sometimes indirect light works better than direct sunlight. Include some surrounding rock for
            context, and consider taking both wide shots and detailed close-ups.
          </p>

          <h2>Midday: Dramatic Landscapes</h2>

          <div className="relative h-[500px] rounded-lg overflow-hidden my-8">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Panoramic view of Wadi Rum's vast landscape with towering mountains"
              fill
              className="object-cover"
            />
          </div>

          <p>
            While midday light can be challenging for photography, it's the perfect time to capture the sheer scale of
            Wadi Rum. The vast desert vistas, with mountains rising dramatically from the sand plains, create a sense of
            otherworldliness that has drawn filmmakers seeking alien landscapes. The clarity of the desert air allows
            you to see for miles, with distant formations appearing in layers of progressively lighter hues.
          </p>

          <p>
            <strong>Photography tip:</strong> For these wide landscape shots, use a polarizing filter to deepen the blue
            sky and enhance contrast. Consider creating panoramic images by stitching multiple shots together. Including
            a human figure, vehicle, or camel in the scene helps convey the immense scale.
          </p>

          <div className="relative h-[500px] rounded-lg overflow-hidden my-8">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Natural rock arch with person standing beneath for scale"
              fill
              className="object-cover"
            />
          </div>

          <p>
            Wadi Rum's natural rock bridges and arches are among its most photogenic features. Formed over millennia by
            wind erosion, these gravity-defying formations create perfect frames for creative compositions. The contrast
            between the solid rock and the open sky emphasizes the delicate balance of these natural wonders.
          </p>

          <p>
            <strong>Photography tip:</strong> Experiment with different positions to frame landscapes through the
            arches. For dramatic effect, try shooting directly upward through an arch to capture the blue sky beyond.
            Having a person stand beneath the arch (at a respectful distance) provides a sense of scale.
          </p>

          <h2>Afternoon: The Changing Light</h2>

          <div className="relative h-[500px] rounded-lg overflow-hidden my-8">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Narrow canyon with dramatic shadows and light beams"
              fill
              className="object-cover"
            />
          </div>

          <p>
            As the sun begins its westward journey, the light in Wadi Rum transforms again. Narrow canyons become
            theaters of light and shadow, with sunbeams occasionally penetrating to create dramatic spotlights on the
            canyon floor. The eastern faces of mountains that glowed at sunrise now fall into shadow, while western
            faces begin to warm with the approaching sunset light.
          </p>

          <p>
            <strong>Photography tip:</strong> In narrow canyons, look for light beams created when sunlight filters
            through gaps in the rocks above. These are most visible when there's dust or sand in the air to catch the
            light. Use a slightly higher ISO to maintain a fast enough shutter speed for handheld shooting in these
            darker environments.
          </p>

          <div className="relative h-[500px] rounded-lg overflow-hidden my-8">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Bedouin guide with camel against desert backdrop"
              fill
              className="object-cover"
            />
          </div>

          <p>
            The afternoon is also an excellent time to capture the human element of Wadi Rum. The Bedouin people have
            inhabited this harsh environment for centuries, developing a deep understanding of the desert and its
            rhythms. Their traditional lifestyle, adapted to desert conditions, adds a cultural dimension to the natural
            beauty of Wadi Rum.
          </p>

          <p>
            <strong>Photography tip:</strong> Always ask permission before photographing Bedouin people, especially
            women. When permission is granted, use a medium telephoto lens (85-135mm) for portraits that include some
            environmental context. The afternoon light can create beautiful side lighting that brings out facial
            features.
          </p>

          <h2>Sunset: The Desert Ablaze</h2>

          <div className="relative h-[500px] rounded-lg overflow-hidden my-8">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Dramatic sunset with silhouetted mountains and red-orange sky"
              fill
              className="object-cover"
            />
          </div>

          <p>
            As the day draws to a close, Wadi Rum presents perhaps its most spectacular display. The setting sun paints
            the western sky in shades of orange, pink, and purple, while the sandstone mountains intensify to a deep
            rust red. The interplay of warm light and cool shadows creates a landscape of extraordinary contrast and
            color.
          </p>

          <p>
            <strong>Photography tip:</strong> Arrive at your chosen sunset location at least 30 minutes before actual
            sunset. The best colors often appear 10-15 minutes before the sun disappears and continue for about 15-20
            minutes afterward. Bracket your exposures (take multiple shots at different exposure settings) to capture
            both the bright sky and darker landscape.
          </p>

          <div className="relative h-[500px] rounded-lg overflow-hidden my-8">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Silhouettes of desert mountains against colorful sunset sky"
              fill
              className="object-cover"
            />
          </div>

          <p>
            As the sun dips below the horizon, the mountains become dramatic silhouettes against the glowing sky. This
            is the perfect time for minimalist compositions that emphasize shape and form. The simplicity of a dark
            mountain profile against a colorful sky creates powerful, emotional images.
          </p>

          <p>
            <strong>Photography tip:</strong> For striking silhouettes, expose for the sky rather than the landscape.
            This will render the mountains as pure black shapes against the colorful background. Try including
            distinctive mountain profiles or a solitary tree for added interest.
          </p>

          <h2>Evening: The Blue Hour</h2>

          <div className="relative h-[500px] rounded-lg overflow-hidden my-8">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Desert camp with glowing tents against deep blue twilight sky"
              fill
              className="object-cover"
            />
          </div>

          <p>
            After sunset comes the "blue hour"—a brief period when the sky takes on a deep blue hue before darkness
            falls completely. This magical time creates a peaceful atmosphere as the desert transitions from day to
            night. Desert camps begin to glow with warm light, creating inviting havens in the growing darkness.
          </p>

          <p>
            <strong>Photography tip:</strong> Use a tripod during blue hour, as light levels are low. The contrast
            between the cool blue ambient light and the warm yellow light from camps and fires creates a pleasing color
            contrast. Try a long exposure (several seconds) to capture the movement of people around campfires as
            ghostly blurs.
          </p>

          <h2>Night: The Desert Under Stars</h2>

          <div className="relative h-[500px] rounded-lg overflow-hidden my-8">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Milky Way arching over Wadi Rum mountains with tent in foreground"
              fill
              className="object-cover"
            />
          </div>

          <p>
            When darkness falls completely, Wadi Rum reveals perhaps its most awe-inspiring face. Far from city lights,
            the desert night sky explodes with stars in a display that has to be seen to be believed. The Milky Way
            arches overhead like a river of light, while familiar constellations appear with extraordinary clarity.
          </p>

          <p>
            <strong>Photography tip:</strong> For basic Milky Way photography, use a wide-angle lens with a large
            aperture (f/2.8 or wider if possible), set ISO between 1600-6400 (depending on your camera's capabilities),
            and use a shutter speed of 15-30 seconds. Always use a sturdy tripod and a remote shutter release or timer
            to avoid camera shake.
          </p>

          <div className="relative h-[500px] rounded-lg overflow-hidden my-8">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Star trails circling above desert mountains in night sky"
              fill
              className="object-cover"
            />
          </div>

          <p>
            For a different perspective on the night sky, star trail photography captures the apparent movement of stars
            due to Earth's rotation. The result is concentric circles of light around the north celestial pole (near the
            North Star), creating a dynamic representation of time passing over the ancient desert landscape.
          </p>

          <p>
            <strong>Photography tip:</strong> For star trails, you'll need to take multiple exposures over a period of
            1-3 hours and stack them in post-processing. Use an intervalometer to capture a series of 30-second
            exposures with minimal gap between them. Software like StarStaX can then combine these images into a single
            star trail composition.
          </p>

          <h2>Essential Photography Gear for Wadi Rum</h2>

          <p>To capture the full range of Wadi Rum's photographic opportunities, consider bringing:</p>

          <ul>
            <li>
              <strong>Wide-angle lens:</strong> Essential for landscapes and night sky (16-24mm recommended)
            </li>
            <li>
              <strong>Standard zoom:</strong> Versatile for general shooting (24-70mm)
            </li>
            <li>
              <strong>Telephoto lens:</strong> For details and compression effects (70-200mm)
            </li>
            <li>
              <strong>Sturdy tripod:</strong> Essential for low-light and night photography
            </li>
            <li>
              <strong>Polarizing filter:</strong> Reduces glare and enhances colors
            </li>
            <li>
              <strong>Graduated neutral density filters:</strong> Helpful for balancing bright skies with darker
              landscapes
            </li>
            <li>
              <strong>Lens cleaning kit:</strong> Desert dust is inevitable
            </li>
            <li>
              <strong>Extra batteries:</strong> Limited charging opportunities in desert camps
            </li>
            <li>
              <strong>Plenty of memory cards:</strong> You'll take more photos than you expect
            </li>
            <li>
              <strong>Headlamp with red light:</strong> For setting up night shots without ruining your night vision
            </li>
            <li>
              <strong>Camera rain/dust cover:</strong> Protects gear during windy conditions
            </li>
          </ul>

          <h2>Practical Photography Tips for Wadi Rum</h2>

          <h3>Protecting Your Gear</h3>
          <p>
            The desert environment presents challenges for photography equipment. Fine sand can damage lenses and camera
            bodies if not properly protected:
          </p>
          <ul>
            <li>Change lenses as infrequently as possible, and always with your back to the wind</li>
            <li>Use a dust blower before using lens cloths to avoid scratching glass with sand particles</li>
            <li>Keep your camera in a sealed bag when not in use, especially during jeep rides</li>
            <li>Consider using a UV filter primarily as protection for your lens front element</li>
            <li>Bring ziplock bags to protect gear during sandstorms or unexpected weather</li>
          </ul>

          <h3>Working with the Light</h3>
          <p>Desert light has unique qualities that require specific approaches:</p>
          <ul>
            <li>The contrast between sun and shadow is extreme—consider HDR techniques or graduated filters</li>
            <li>
              Midday light can be harsh—look for subjects in open shade or focus on patterns and textures rather than
              wide landscapes
            </li>
            <li>
              Sand reflects light upward, creating natural fill light—this can be flattering for portraits if positioned
              correctly
            </li>
            <li>
              Heat haze can affect sharpness in distance shots during hot days—telephoto landscape shots are best in
              early morning
            </li>
          </ul>

          <h3>Composition in the Desert</h3>
          <p>The vast scale of Wadi Rum requires thoughtful composition:</p>
          <ul>
            <li>Include foreground elements to create depth in wide landscape shots</li>
            <li>Use leading lines (like tracks in the sand) to draw the viewer's eye through the image</li>
            <li>
              Look for natural frames within the landscape—arches, canyon openings, or the space between rock formations
            </li>
            <li>Include people, camels, or vehicles to provide scale in images of massive formations</li>
            <li>Consider the rule of thirds, placing key elements at intersection points rather than dead center</li>
            <li>Don't forget to look down—the patterns in the sand can be as compelling as the grand vistas</li>
          </ul>

          <h3>Cultural Sensitivity</h3>
          <p>Respectful photography practices are essential:</p>
          <ul>
            <li>Always ask permission before photographing Bedouin people</li>
            <li>Be especially respectful when photographing women and children</li>
            <li>
              Offer to share photos via email or WhatsApp—many Bedouin guides have smartphones even in remote areas
            </li>
            <li>Consider bringing a portable printer to give instant photos as gifts</li>
            <li>If you promise to send photos later, follow through—it builds goodwill for future photographers</li>
          </ul>

          <h2>Beyond Photography: Experiencing the Moment</h2>

          <div className="relative h-[500px] rounded-lg overflow-hidden my-8">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Person sitting quietly on rock overlooking vast desert landscape"
              fill
              className="object-cover"
            />
          </div>

          <p>
            While capturing beautiful images of Wadi Rum is rewarding, remember to experience the desert with all your
            senses. Sometimes the most profound moments come when you put the camera down and simply absorb the
            vastness, the silence, and the timeless quality of this extraordinary landscape.
          </p>

          <p>
            Take time to sit quietly and listen to the subtle sounds of the desert—the soft whisper of sand moving in
            the breeze, the distant call of a bird, the creak of a saddle as a camel shifts its weight. Feel the texture
            of the cool sand running through your fingers. Breathe in the clean desert air, sometimes carrying the faint
            scent of wild herbs after rain.
          </p>

          <p>
            These sensory experiences, though impossible to photograph, will become part of your complete memory of Wadi
            Rum—a personal connection to this remarkable place that goes beyond images. The photographs you take will
            then serve as gateways back to these fuller memories, each image evoking not just what you saw, but what you
            felt in that moment.
          </p>

          <p>
            Wadi Rum has inspired photographers, filmmakers, and artists for generations, each finding their own way to
            interpret its beauty. As you create your own visual diary of this magnificent desert, you join a long
            tradition of those who have attempted to capture something of its essence. While no photograph can fully
            convey the experience of being there, the images you create will tell your unique story of Wadi Rum—a
            personal visual narrative of your journey through one of Earth's most extraordinary landscapes.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">More Articles About Wadi Rum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wadiRum.blogPosts
              .filter((post) => post.slug !== "wadi-rum-photo-diary")
              .slice(0, 2)
              .map((post) => (
                <Link key={post.slug} href={`/destinations/wadi-rum/wadi-rum-blog/${post.slug}`} className="group">
                  <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{post.title}</h3>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
