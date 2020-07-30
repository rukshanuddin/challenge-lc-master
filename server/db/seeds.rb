require 'csv'
require 'database_cleaner'
require 'byebug'
DatabaseCleaner.clean_with(:truncation)
Poste.categories.keys.each { |cat| Poste.create!(category: cat) }

Operator.create!([
  { first_name: "Hubert", last_name: "Bonisseur De La Bath" },
  { first_name: "Noël", last_name: "Flantier" },
  { first_name: "Jack", last_name: "Jefferson" },
  { first_name: "Von", last_name: "Zimmel" },
  { first_name: "Larmina", last_name: "Betouche" }
])

Product.create!([
  { name: "Robe rouge" },
  { name: "Robe jaune" },
  { name: "Robe bleue" },
  { name: "Robe verte" }
])

topics = [
            ["Git","https://library.kissclipart.com/20181208/qcq/kissclipart-github-logo-gif-clipart-github-computer-icons-fork-e6e2e78b85d16c1c.jpg"],
            ["AI & ML", "https://i2.wp.com/www.devicebits.com/wp-content/uploads/2017/03/support-predict-icon.png"],
            ["Rails API", "https://railsware.com/blog/wp-content/uploads/2013/04/API-with-Ruby-180x180.png"],
            ["CS Concepts", "https://b.thumbs.redditmedia.com/rSQiXMQH6Hfx6JT93g5PfXJ1qubd7y9wJX6FmIsAHik.png"],
            ["Video Channels", "https://www.moovly.com/wp-content/uploads/2020/03/Moovlysharingimage-768x768.png"],
            ["Ruby", "https://miro.medium.com/max/256/1*oxE7LP235FsZJvs_sQCocw.png"],
            ["Javascript", "https://upload.wikimedia.org/wikipedia/commons/d/dc/Javascript-shield.png"],
            ["ReactJS", "https://image.flaticon.com/icons/svg/919/919851.svg"],
            ["Front-end","https://images.opencollective.com/front-end-checklist/fccee96/logo/256.png"],
            ["SQL", "https://access-excel.tips/wp-content/uploads/2015/07/feature_sql.png"], 
            ["Python", "https://www.pinclipart.com/picdir/big/269-2691398_python-logo-clipart-transparent-background-png-download.png"], 
            ["Testing", "https://www.iqvis.com/wp-content/uploads/2019/10/Software-Testing-Companies-256x256.jpg"],
            ["General Tools & Docs", "https://img2.freepng.es/20180714/fqi/kisspng-helpndoc-help-authoring-tool-madcap-software-compu-taurus-symbol-5b4a42ff4216f0.7408575315315934712707.jpg"],
            ["Productivity Tools", "https://devtechnosys.com/images/2020/icon/Increase-in-productivity.png"],
            ["Communities & Cont. Learning","https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1525898286/springbranchisdcom/kn8hx8hfhj69d21s6sm1/cropped-favicon.png"],
            ["Operating Systems", "https://lh3.googleusercontent.com/proxy/gR2VxUq_N7Eiu3UCKjEIyPNci6QSjxly-qGhPAMJOHKLRxjpse5seBd_5t1CzeKVMpQx5TACPD4qPzdVPnhKuDDVChuu5lVMtUt8ojLf-NjlMhekRkZnxjpOHB3IIQ"],
            ["Interview Prep & Practice", "https://prepinsta.com/wp-content/uploads/elementor/thumbs/cgi-interview-oefhi3umq06a33sg8g04ceodm2633my5yeiw17da80.png"],
            ["Women in Tech", "https://tulula.sfo2.cdn.digitaloceanspaces.com/prod/images/cf852703b810b7ccafde3e4d2f647674c3d66b246cd401844c41dbdea5b0aa66.png"],
            ["Twitter", "https://buytwitterfollowersreview.org/wp-content/uploads/2012/05/555495305168135374.png"],
            ["Podcasts", "https://image.jimcdn.com/app/cms/image/transf/none/path/s3a6f2805f52f36e5/image/icd2d4396f672e7ef/version/1568279142/image.png"],
            ["Inspirational", "https://i2.wp.com/www.melissawashburn.com/nwp/wp-content/uploads/Inspiration_sm.jpg?w=256&h=256&crop=1&ssl=1"]]

topics.each { |topic| Topic.create(name: topic[0], img: topic[1] ? topic[1] : "https://images.opencollective.com/front-end-checklist/fccee96/logo/256.png" )}

csv_text = File.read(Rails.root.join('lib', 'seeds', 'git.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Git")
    t.name = row['Site Name']
    t.link = row['Link']
    t.category = row['Category']
    if row['Topic'] != nil
        t.section = row['Topic']
    else
        t.section = "Git"
    end
    t.language = 'Git'
    t.blurb = row['Comments']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'ruby.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Ruby")
    t.name = row['Site Name']
    t.link = row['Link']
    t.category = row['Category']
    if row['Flatiron Section'] != nil
        t.section = row['Flatiron Section']
    else
        t.section = row['Topic']
    end
    t.language = row['Languages & Frameworks']
    t.blurb = row['Comments']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'js.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Javascript")
    t.name = row['Site Name']
    t.link = row['Link']
    t.category = row['Category']
    if row['Flatiron Section'] != nil
        t.section = row['Flatiron Section']
    else
        t.section = row['Topic']
    end
    t.language = row['Languages & Frameworks']
    t.blurb = row['Comments']
  t.save
  
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'react.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("ReactJS")
    t.name = row['Site Name']
    t.link = row['Link']
    t.category = row['Category']
    t.section = row['Topic']
    t.language = row['Flatiron Section']
    t.blurb = row['Comments']
  t.save
  
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'aiml.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("AI & ML")
    t.name = row['Site Name']
    t.link = row['Link']
    t.category = row['Category']
    t.section = row['Topic']
    t.language = 'AI'
    t.blurb = row['Comments']
  t.save

end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'api.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Rails API")
    t.name = row['Site Name']
    t.link = row['Link']
    t.category = row['Category']
    t.section = "Rails"
    t.language = row['Languages & Frameworks']
    t.blurb = row['Comments']
  t.save
  
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'ce.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Communities & Cont. Learning")
    t.name = row['Site Name']
    t.link = row['Link']
    t.category = row['Category']
    t.section = "Continuing Education"
    if row['Languages & Frameworks'] != nil
        t.language = row['Languages & Frameworks']
    else
        "N/A"
    end
    t.blurb = row['Comments']
  t.save
  
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'channels.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Video Channels")
    t.name = row['Name']
    t.link = row['Link']
    if row['Link'].include?("youtube")
        t.category = "YouTube"
    else
        t.category = "Video"
    end
    t.section = "N/A"
    t.language = "N/A"
    t.blurb = row['Comments']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'cs.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("CS Concepts")
    if row["Site Name"] != nil
        t.name = row['Site Name']
    else
        t.name = row['Link'].split("/")[2]
    end
    t.link = row['Link']
    t.category = row['Category']
    t.section = row['Topic']
    t.language = row['Topic']
    t.blurb = row['Comments']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'fe.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Front-end")
    t.name = row['Site Name']
    t.link = row['Link']
    t.category = row['Category']
    if row['Topic'] != nil 
        t.section = row['Topic']
    else
        t.section = "Front-end"
    end
    t.language = row['Languages & Frameworks']
    t.blurb = row['Comments']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'gendocs.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("General Tools & Docs")
    t.name = row['Site Name']
    t.link = row['Link']
    t.category = row['Category']
    t.section = "N/A"
    if row['Languages & Frameworks'] != nil
        t.language = row['Languages & Frameworks']
    else
        t.language = "General"
    end
    t.blurb = row['Comments']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'inspo.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Inspirational")
    t.name = row['Name']
    t.link = row['Link']
    t.category = "Video Webinar by Avi Flombaum"
    t.section = "Lectures"
    t.language = row['Languages & Frameworks']
    t.blurb = row['Comments']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'podcast.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Podcasts")
    t.name = row['Name']
    t.link = row['Link']
    t.category = "Podcast"
    t.section = "N/A"
    if row['Notable Episodes'] != nil
        t.language = row['Notable Episodes']
    else
        t.language = "N/A"
    end
    t.blurb = row['Comments']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'testing.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Testing")
    t.name = row['Site Name']
    t.link = row['Link']
    t.category = row['Category']
    if row['Site Name'].downcase.include?("rails")
        t.section =  "Rails"
    else 
        t.section = "Ruby"
    end
    t.language = row['Languages & Frameworks']
    t.blurb = row['Comments']
  t.save
end


csv_text = File.read(Rails.root.join('lib', 'seeds', 'fe.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Front-end")
    t.name = row['Site Name']
    t.link = row['Link']
    t.category = row['Category']
    if row['Topic'] != nil
        t.section = row['Topic']
    else
        t.section = "Front-end"
    end
    t.language = row['Languages & Frameworks']
    t.blurb = row['Comments']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'sql.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("SQL")
    t.name = row['Site Name']
    t.link = row['Link']
    t.category = row['Category']
    t.section = row['Topic']
    t.language = row['Languages & Frameworks']
    t.blurb = row['Comments']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'productivity.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Productivity Tools")
    t.name = row['Site Name']
    t.link = row['Link']
    t.category = row['Category']
    t.section = "Productivity"
    t.language = row['Platforms']
    t.blurb = row['Comments']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'os.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Operating Systems")
    t.name = row['Site Name']
    t.link = row['Link']
    t.category = row['Category']
    t.section = "OS"
    t.language = "CS"
    t.blurb = row['Comments']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'interview.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Interview Prep & Practice")
    t.name = row['Name']
    t.link = row['Link']
    t.category = "Practice"
    t.section = "Continuing Education"
    t.language = "N/A"
    t.blurb = row['Comments']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'WiT.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Women in Tech")
    t.name = row['Name']
    t.link = row['Link']
    t.category = "Women in Tech"
    t.section = "N/A"
    t.language = "N/A"
    t.blurb = row['Comments']
  t.save
end

csv_text = File.read(Rails.root.join('lib', 'seeds', 'twitter.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Link.create
    t.topic = Topic.find_by_name("Twitter")
    if row['Name'] != nil
        t.name = row['Name']
    else
        t.name = row["Twitter Handle/Link"]
    end
    if row['Twitter Handle/Link'].include?("twitter")
        t.link = row['Twitter Handle/Link']
    else
        t.link = "https://twitter.com/" + row["Twitter Handle/Link"].split("@")[1]
    end
    if row['Hashtags'] != nil
        t.category = row['Hashtags']
    else
        t.category = "Twitter"
    end
    t.section = "N/A"
    t.language = "N/A"
    t.blurb = row['Bio']
  t.save
end