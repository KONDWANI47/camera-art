"use client"

import { useEffect } from "react"

export default function HomePage() {
  useEffect(() => {
    // Load the script functionality after component mounts
    const script = document.createElement("script")
    script.src = "/script.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      {/* Header Section */}
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="logo">
              <h2>
                Vegas<span>Media</span>
              </h2>
            </div>

            {/* Search Form */}
            <div className="search-item">
              <form className="search-form" id="header-search-form">
                <input type="text" id="search-input" placeholder="Search gallery..." aria-label="Search" />
                <button type="submit" className="search-btn" aria-label="Submit search">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
            <ul className="nav-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="/booking">Booking</a>
              </li>
            </ul>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="animate fadeInDown">Capturing Malawi's Vibrant Culture & Landscapes</h1>
            <p className="animate fadeInUp">
              Professional photography services showcasing the heart of Africa - from Lake Malawi to Mount Mulanje
            </p>
            <div className="hero-btns animate fadeInUp">
              <a href="#gallery" className="btn primary-btn">
                View Gallery
              </a>
              <a href="#services" className="btn secondary-btn">
                Our Services
              </a>
            </div>
            <div className="camera-icon animate fadeInUp">
              <i className="fas fa-camera"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-title">
            <h2>Our Gallery</h2>
            <p>Browse our collection of stunning photographs</p>
          </div>
          <div className="gallery-filters">
            <button className="filter-btn active" data-filter="all">
              All
            </button>
            <button className="filter-btn" data-filter="wedding">
              Wedding
            </button>
            <button className="filter-btn" data-filter="portrait">
              Portrait
            </button>
            <button className="filter-btn" data-filter="nature">
              Nature
            </button>
            <button className="filter-btn" data-filter="event">
              Event
            </button>
          </div>
          <div className="gallery-grid">{/* Gallery items will be populated by JavaScript */}</div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Professional photography services tailored to Malawi's unique beauty</p>
          </div>
          <div className="services-grid">
            <div className="service-card animate fadeInUp">
              <div className="service-icon">
                <i className="fas fa-ring"></i>
              </div>
              <h3>Traditional Wedding Photography</h3>
              <p>
                Capture your special day with our professional wedding photography services, showcasing Malawian
                traditions.
              </p>
              <span className="price">MK80,000 - MK200,000</span>
              <button className="btn secondary-btn book-service" data-service="wedding">
                Book Now
              </button>
            </div>
            <div className="service-card animate fadeInUp">
              <div className="service-icon">
                <i className="fas fa-user"></i>
              </div>
              <h3>Cultural Portrait Sessions</h3>
              <p>Professional portraits highlighting Malawi's diverse cultures and people.</p>
              <span className="price">MK20,000 - MK50,000</span>
              <button className="btn secondary-btn book-service" data-service="portrait">
                Book Now
              </button>
            </div>
            <div className="service-card animate fadeInUp">
              <div className="service-icon">
                <i className="fas fa-mountain"></i>
              </div>
              <h3>Landscape Photography</h3>
              <p>Stunning landscape photography of Lake Malawi, Mount Mulanje, and other natural wonders.</p>
              <span className="price">MK15,000 - MK40,000</span>
              <button className="btn secondary-btn book-service" data-service="nature">
                Book Now
              </button>
            </div>
            <div className="service-card animate fadeInUp">
              <div className="service-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3>Event Coverage</h3>
              <p>Professional coverage for cultural events, festivals, and special occasions in Malawi.</p>
              <span className="price">MK50,000 - MK150,000</span>
              <button className="btn secondary-btn book-service" data-service="event">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image animate fadeInLeft">
              <img
                src="https://images.unsplash.com/photo-1582267907037-2d933d9e0e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80"
                alt="Photographer in Malawi"
              />
            </div>
            <div className="about-text animate fadeInRight">
              <h2>About Vegas Media</h2>
              <p>
                Founded in Lilongwe in 2010, Vegas Media has been capturing the breathtaking beauty of the Warm Heart of
                Africa for over a decade. Our team of professional photographers specializes in showcasing Malawi's
                stunning landscapes, vibrant culture, and unforgettable moments.
              </p>
              <p>
                From the crystal-clear waters of Lake Malawi to the majestic peaks of Mount Mulanje, we capture the
                diverse beauty of Malawi through our lenses. We believe that every photograph should evoke emotion and
                preserve memories for generations to come.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <h3>800+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat-item">
                  <h3>13+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>5000+</h3>
                  <p>Photos Captured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Client Testimonials</h2>
            <p>What our clients say about us</p>
          </div>
          <div className="testimonials-slider">
            <div className="testimonial active">
              <div className="testimonial-content">
                <p>
                  "The wedding photography exceeded our expectations. Every moment was captured beautifully, and the
                  emotions were perfectly portrayed. Highly recommended!"
                </p>
                <div className="client-info">
                  <h4>Sarah & Michael Johnson</h4>
                  <p>Wedding Clients</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "Our family portraits turned out absolutely stunning. The photographer had a great eye for detail and
                  made everyone feel comfortable during the session."
                </p>
                <div className="client-info">
                  <h4>The Thompson Family</h4>
                  <p>Portrait Session</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "The landscape prints we purchased are now the centerpiece of our living room. The quality and detail
                  are exceptional."
                </p>
                <div className="client-info">
                  <h4>Robert Chen</h4>
                  <p>Art Collector</p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-nav">
            <button className="prev-btn">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="next-btn">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <div className="section-title">
            <h2>Our Photographers</h2>
            <p>Meet the talented team behind Vegas Media</p>
          </div>
          <div className="team-grid">
            <div className="team-member animate fadeInUp">
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1560250091-24172b1d330d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="James Mwale"
                />
              </div>
              <div className="member-info">
                <h3>James Mwale</h3>
                <p className="role">Founder & Lead Photographer</p>
                <p>
                  Specializing in wedding and cultural photography with over 12 years of experience capturing Malawi's
                  beauty.
                </p>
                <div className="social-icons">
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member animate fadeInUp">
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Grace Banda"
                />
              </div>
              <div className="member-info">
                <h3>Grace Banda</h3>
                <p className="role">Portrait Specialist</p>
                <p>Focused on capturing the authentic spirit of Malawians through compelling portrait photography.</p>
                <div className="social-icons">
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member animate fadeInUp">
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0e1607d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="David Phiri"
                />
              </div>
              <div className="member-info">
                <h3>David Phiri</h3>
                <p className="role">Landscape Photographer</p>
                <p>Documenting Malawi's stunning natural landscapes from Lake Malawi to the Nyika Plateau.</p>
                <div className="social-icons">
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="team-member animate fadeInUp">
              <div className="member-image">
                <img
                  src="https://images.unsplash.com/photo-1548677623-0f37f63d0f25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600&q=80"
                  alt="Esther Chimwendo"
                />
              </div>
              <div className="member-info">
                <h3>Esther Chimwendo</h3>
                <p className="role">Cultural Documentation Specialist</p>
                <p>
                  Passionate about preserving Malawi's rich cultural heritage through photography, specializing in
                  traditional ceremonies and community life.
                </p>
                <div className="social-icons">
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <div className="container">
          <div className="section-title">
            <h2>Latest from our Blog</h2>
            <p>Photography tips and stories from Malawi</p>
          </div>
          <div className="blog-grid">
            <div className="blog-post animate fadeInUp">
              <div className="post-image">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Best Photography Spots in Malawi"
                />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span>
                    <i className="far fa-calendar"></i> June 15, 2023
                  </span>
                  <span>
                    <i className="far fa-user"></i> James Mwale
                  </span>
                </div>
                <h3>Top 5 Photography Spots in Malawi</h3>
                <p>
                  Discover the most breathtaking locations for photography in Malawi, from Lake Malawi's shores to Mount
                  Mulanje's peaks.
                </p>
                <a href="#" className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="blog-post animate fadeInUp">
              <div className="post-image">
                <img
                  src="https://images.unsplash.com/photo-1542540118-10502e7e1fb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Cultural Photography Tips"
                />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span>
                    <i className="far fa-calendar"></i> May 28, 2023
                  </span>
                  <span>
                    <i className="far fa-user"></i> Grace Banda
                  </span>
                </div>
                <h3>Capturing Malawi's Cultural Heritage</h3>
                <p>
                  Learn techniques for respectfully photographing Malawi's diverse cultures and traditions while
                  preserving their authenticity.
                </p>
                <a href="#" className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="blog-post animate fadeInUp">
              <div className="post-image">
                <img
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Wildlife Photography"
                />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span>
                    <i className="far fa-calendar"></i> April 10, 2023
                  </span>
                  <span>
                    <i className="far fa-user"></i> David Phiri
                  </span>
                </div>
                <h3>Wildlife Photography in Malawi's Parks</h3>
                <p>Expert tips for capturing Malawi's incredible wildlife in Liwonde National Park and beyond.</p>
                <a href="#" className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="blog-post animate fadeInUp">
              <div className="post-image">
                <img
                  src="https://images.unsplash.com/photo-1549874570-30e491a4a8d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Nyika Plateau Photography"
                />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span>
                    <i className="far fa-calendar"></i> March 22, 2023
                  </span>
                  <span>
                    <i className="far fa-user"></i> Esther Chimwendo
                  </span>
                </div>
                <h3>Floral Wonders of Nyika Plateau</h3>
                <p>
                  Experience the spectacular wildflower displays during Nyika Plateau's flowering season and how to
                  capture these vibrant colors.
                </p>
                <a href="#" className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="blog-post animate fadeInUp">
              <div className="post-image">
                <img
                  src="https://images.unsplash.com/photo-1584989133804-2d09384ab545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Lake Malawi Photography"
                />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span>
                    <i className="far fa-calendar"></i> February 14, 2023
                  </span>
                  <span>
                    <i className="far fa-user"></i> James Mwale
                  </span>
                </div>
                <h3>Lake Malawi: The Lake of Stars</h3>
                <p>
                  Tips for capturing the magical beauty of Lake Malawi, from sunrise over the water to starry nights
                  reflecting on its surface.
                </p>
                <a href="#" className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="blog-post animate fadeInUp">
              <div className="post-image">
                <img
                  src="https://images.unsplash.com/photo-1592739853172-4d4a5d4e6d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Traditional Ceremonies"
                />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span>
                    <i className="far fa-calendar"></i> January 30, 2023
                  </span>
                  <span>
                    <i className="far fa-user"></i> Grace Banda
                  </span>
                </div>
                <h3>Documenting Traditional Ceremonies</h3>
                <p>
                  Guidance on respectfully photographing Malawi's traditional ceremonies while maintaining cultural
                  sensitivity and authenticity.
                </p>
                <a href="#" className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services</p>
          </div>
          <div className="faq-container">
            <div className="faq-item animate fadeInUp">
              <div className="faq-question">
                <h3>What is included in your wedding photography package?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  Our wedding packages include full-day coverage, a pre-wedding consultation, professional editing of
                  all selected photos, and delivery of high-resolution digital images. We also offer optional engagement
                  sessions and printed albums.
                </p>
              </div>
            </div>
            <div className="faq-item animate fadeInUp">
              <div className="faq-question">
                <h3>How far in advance should I book your services?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  We recommend booking 3-6 months in advance for weddings and special events, especially during peak
                  seasons. For portrait sessions, 2-4 weeks' notice is usually sufficient. However, we do accommodate
                  last-minute requests when possible.
                </p>
              </div>
            </div>
            <div className="faq-item animate fadeInUp">
              <div className="faq-question">
                <h3>Do you travel for photography sessions outside Lilongwe?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  Yes, we travel throughout Malawi for photography sessions. Travel fees may apply depending on the
                  location. We've photographed weddings and events in Blantyre, Mzuzu, and various locations around Lake
                  Malawi.
                </p>
              </div>
            </div>
            <div className="faq-item animate fadeInUp">
              <div className="faq-question">
                <h3>How long does it take to receive our photos after a session?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  Portrait sessions are typically delivered within 2 weeks, while wedding galleries take 4-6 weeks due
                  to the extensive editing process. We provide a sneak peek of selected images within 48 hours of your
                  session.
                </p>
              </div>
            </div>
            <div className="faq-item animate fadeInUp">
              <div className="faq-question">
                <h3>What payment methods do you accept?</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>
                  We accept bank transfers, mobile money (Airtel Money and TNM Mpamba), and cash payments in Malawian
                  Kwacha. For international clients, we also accept PayPal and credit card payments with a small
                  processing fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Malawi Map Section */}
      <section className="malawi-map">
        <div className="container">
          <div className="section-title">
            <h2>Photography Locations in Malawi</h2>
            <p>Discover the stunning locations we've captured across the Warm Heart of Africa</p>
          </div>
          <div className="map-container">
            <div className="map-image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Malawi_districts.png/800px-Malawi_districts.png"
                alt="Map of Malawi"
              />
            </div>
            <div className="map-features">
              <div className="feature-item animate fadeInUp">
                <div className="feature-icon">
                  <i className="fas fa-water"></i>
                </div>
                <div className="feature-content">
                  <h3>Lake Malawi</h3>
                  <p>
                    Known as the Lake of Stars, Lake Malawi offers breathtaking sunrise and sunset photography
                    opportunities with fishing boats and island views. Best visited during dry season (May-October).
                  </p>
                </div>
              </div>
              <div className="feature-item animate fadeInUp">
                <div className="feature-icon">
                  <i className="fas fa-mountain"></i>
                </div>
                <div className="feature-content">
                  <h3>Mount Mulanje</h3>
                  <p>
                    Malawi's highest peak provides dramatic landscape photography with panoramic views, especially
                    during the rainy season (November-April) when waterfalls are abundant.
                  </p>
                </div>
              </div>
              <div className="feature-item animate fadeInUp">
                <div className="feature-icon">
                  <i className="fas fa-tree"></i>
                </div>
                <div className="feature-content">
                  <h3>Nyika Plateau</h3>
                  <p>
                    The rolling hills of Nyika National Park offer spectacular wildlife and landscape photography,
                    especially during the flowering season in August when wildflowers carpet the plateau.
                  </p>
                </div>
              </div>
              <div className="feature-item animate fadeInUp">
                <div className="feature-icon">
                  <i className="fas fa-umbrella-beach"></i>
                </div>
                <div className="feature-content">
                  <h3>Cape Maclear</h3>
                  <p>
                    With pristine beaches and crystal-clear waters, Cape Maclear is perfect for coastal and underwater
                    photography. Ideal for capturing water sports and beach culture.
                  </p>
                </div>
              </div>
              <div className="feature-item animate fadeInUp">
                <div className="feature-icon">
                  <i className="fas fa-paw"></i>
                </div>
                <div className="feature-content">
                  <h3>Liwonde National Park</h3>
                  <p>
                    Home to elephants, hippos, and diverse bird species, Liwonde offers exceptional wildlife photography
                    opportunities, especially during guided boat safaris on the Shire River.
                  </p>
                </div>
              </div>
              <div className="feature-item animate fadeInUp">
                <div className="feature-icon">
                  <i className="fas fa-archway"></i>
                </div>
                <div className="feature-content">
                  <h3>Salima District</h3>
                  <p>
                    Rich in cultural heritage, Salima offers unique opportunities to photograph traditional villages,
                    local markets, and the daily life of the Yao and Ngoni communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Get in touch for bookings and inquiries in Malawi</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Our Studio</h3>
                  <p>Area 24, Lilongwe, Malawi</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Phone</h3>
                  <p>265997677784</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>Email</h3>
                  <p>vegasmediamw@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h3>Working Hours</h3>
                  <p>Monday - Friday: 8AM - 5PM</p>
                  <p>Saturday: 9AM - 1PM</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form id="bookingForm">
                <div className="form-group">
                  <input type="text" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <select id="service" required>
                    <option value="" disabled selected>
                      Select Service
                    </option>
                    <option value="wedding">Traditional Wedding Photography</option>
                    <option value="portrait">Cultural Portrait Session</option>
                    <option value="nature">Landscape Photography</option>
                    <option value="event">Cultural Event Coverage</option>
                    <option value="print">Photo Prints</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea id="message" placeholder="Your Message" rows={5}></textarea>
                </div>
                <button type="submit" className="btn primary-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <div id="booking" className="booking-modal">
        <div className="booking-content">
          <span className="close-booking">&times;</span>
          <h2>Book a Session</h2>
          <form id="booking-payment-form">
            <div className="form-group">
              <label htmlFor="booking-name">Full Name</label>
              <input type="text" id="booking-name" required />
            </div>
            <div className="form-group">
              <label htmlFor="booking-email">Email Address</label>
              <input type="email" id="booking-email" required />
            </div>
            <div className="form-group">
              <label htmlFor="booking-phone">Phone Number</label>
              <input type="tel" id="booking-phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="booking-service">Service</label>
              <select id="booking-service" required>
                <option value="" disabled selected>
                  Select a Service
                </option>
                <option value="wedding">Traditional Wedding Photography - MK80,000 - MK200,000</option>
                <option value="portrait">Cultural Portrait Sessions - MK20,000 - MK50,000</option>
                <option value="nature">Landscape Photography - MK15,000 - MK40,000</option>
                <option value="event">Event Coverage - MK50,000 - MK150,000</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="booking-date">Preferred Date</label>
              <input type="date" id="booking-date" required />
            </div>
            <div className="form-group">
              <label htmlFor="booking-location">Location</label>
              <input type="text" id="booking-location" placeholder="Where would you like the session?" required />
            </div>
            <div className="form-group">
              <label htmlFor="booking-message">Additional Details</label>
              <textarea id="booking-message" rows={4} placeholder="Any special requests or details..."></textarea>
            </div>

            <div className="payment-section">
              <h3>Payment Information</h3>
              <div className="form-group">
                <label htmlFor="payment-method">Payment Method</label>
                <select id="payment-method" required>
                  <option value="" disabled selected>
                    Select Payment Method
                  </option>
                  <option value="mpamba">TNM Mpamba</option>
                  <option value="airtel">Airtel Money</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="cash">Cash Payment</option>
                </select>
              </div>

              <div id="mobile-money-details" className="payment-details">
                <div className="form-group">
                  <label htmlFor="mobile-number">Mobile Number</label>
                  <input type="tel" id="mobile-number" placeholder="Enter your mobile number" />
                </div>
                <p className="payment-info">You will receive a prompt on your phone to complete the payment.</p>
              </div>

              <div id="bank-details" className="payment-details">
                <p className="payment-info">Bank Name: National Bank of Malawi</p>
                <p className="payment-info">Account Name: Vegas Media</p>
                <p className="payment-info">Account Number: 1234567890</p>
                <p className="payment-info">Branch: Lilongwe</p>
                <div className="form-group">
                  <label htmlFor="transaction-id">Transaction ID (if already paid)</label>
                  <input type="text" id="transaction-id" placeholder="Enter transaction reference" />
                </div>
              </div>

              <div id="cash-details" className="payment-details">
                <p className="payment-info">For cash payments, please visit our studio at:</p>
                <p className="payment-info">123 Photography Lane, Lilongwe, Malawi</p>
                <p className="payment-info">Working Hours: Monday - Friday 8AM - 5PM, Saturday 9AM - 1PM</p>
              </div>
            </div>

            <div className="booking-total">
              <h3>
                Booking Deposit: MK<span id="booking-deposit">10,000</span>
              </h3>
              <p className="deposit-info">
                A deposit is required to secure your booking. The remaining balance will be paid on the day of the
                session.
              </p>
            </div>

            <button type="submit" className="btn primary-btn">
              Confirm Booking & Pay Deposit
            </button>
          </form>
        </div>
      </div>

      {/* Payment Confirmation Modal */}
      <div id="payment-confirmation" className="confirmation-modal">
        <div className="confirmation-content">
          <div className="confirmation-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h2>Booking Confirmed!</h2>
          <p>Thank you for your booking. We've sent a confirmation to your email.</p>
          <div className="confirmation-details">
            <p>
              <strong>Booking ID:</strong> <span id="confirmation-id">BM2023001</span>
            </p>
            <p>
              <strong>Service:</strong> <span id="confirmation-service">Traditional Wedding Photography</span>
            </p>
            <p>
              <strong>Date:</strong> <span id="confirmation-date">June 15, 2023</span>
            </p>
            <p>
              <strong>Deposit Paid:</strong> <span id="confirmation-amount">MK10,000</span>
            </p>
          </div>
          <button className="btn primary-btn close-confirmation">Close</button>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h3>Vegas Media</h3>
              <p>Capturing the beauty of Malawi through the lens of artistry and passion since 2010.</p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#gallery">Gallery</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#">Traditional Wedding Photography</a>
                </li>
                <li>
                  <a href="#">Cultural Portrait Sessions</a>
                </li>
                <li>
                  <a href="#">Landscape Photography</a>
                </li>
                <li>
                  <a href="#">Event Coverage</a>
                </li>
                <li>
                  <a href="#">Photo Prints</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <a href="#">+265997677784</a>
                </li>
                <li>
                  <a href="#">vegasmediamw@gmail.com</a>
                </li>
                <li>
                  <a href="#">Lilongwe, area 24, Malawi</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 Vegas Media. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <button className="back-to-top" id="backToTop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <i className="fas fa-chevron-up"></i>
      </button>

      <a href="https://wa.me/265997677784" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  )
}
