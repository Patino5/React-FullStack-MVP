DROP TABLE IF EXISTS golf_clubs;

-- Create the golf_clubs table
CREATE TABLE golf_clubs (
  id SERIAL PRIMARY KEY,
  club_name VARCHAR(255) NOT NULL,
  club_type VARCHAR(255) NOT NULL,
  brand VARCHAR(255) NOT NULL
);

-- Seed the database with 20 different clubs
INSERT INTO golf_clubs (club_name, club_type, brand) VALUES
('STEALTH GLOIRE DRIVER', 'Driver', 'TaylorMade'),
('G430 MAX 3-Wood ', 'Fairway Wood', 'Callaway'),
('Paradym Hybrids 3-hybrid', 'Hybrid', 'Callaway'),
('P770 PHANTOM BLACK IRONS 4-Iron', 'Iron', 'TaylorMade'),
('P770 PHANTOM BLACK IRONS 5-Iron', 'Iron', 'TaylorMade'),
('P770 PHANTOM BLACK IRONS 6-Iron', 'Iron', 'TaylorMade'),
('P770 PHANTOM BLACK IRONS 7-Iron', 'Iron', 'TaylorMade'),
('P770 PHANTOM BLACK IRONS 8-Iron', 'Iron', 'TaylorMade'),
('P770 PHANTOM BLACK IRONS 9-Iron', 'Iron', 'TaylorMade'),
('P770 PHANTOM BLACK IRONS PW', 'Wedge', 'TaylorMade'),
('Vokey SM9 52.12 F', 'Wedge', 'Titleist'),
('Vokey SM9 56.10 S', 'Wedge', 'Titleist'),
('Vokey SM9 60.14 K', 'Wedge', 'Titleist'),
('SPIDER GTX BLACK', 'Putter', 'TaylorMade')
