// Gallery data structure containing all artworks
const galleryData = {
    cubism: [
        {
            id: 'cubism-1',
            title: 'Shadow', // best1
            artist: 'abcddgr',
            concept: 'Shadow Test',
            image: 'https://raw.github.com/abcddgr13/ArtExhibition309/a031129fe2a210d96886cdc05325c141d48977fb/5e2fb085-82d3-46a1-ba1d-881a4e976d0e.jpg',
            category: 'cubism'
        },
        {
            id: 'cubism-2', 
            title: 'Abstract Geometry',
            artist: 'นางสาวปิยะดา คิดสร้าง',
            concept: 'การจัดวางรูปทรงเรขาคณิตที่สื่อถึงความซับซ้อนของชีวิตในยุคดิจิทัล ผ่านการใช้สีสันและเส้นสายที่สร้างความรู้สึกถึงการเคลื่อนไหวและพลังงาน',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'cubism'
        },
        {
            id: 'cubism-3',
            title: 'Broken Dreams',
            artist: 'นายวิชัย สร้างสรรค์',
            concept: 'การแสดงออกถึงความฝันที่แตกสลายผ่านเทคนิคการแยกส่วนและประกอบใหม่ ด้วยการใช้สีที่คมชัดและรูปทรงที่ไม่สมดุล',
            image: 'https://images.unsplash.com/photo-1569701280402-dd2e7b9eeba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'cubism'
        },
        {
            id: 'cubism-4',
            title: 'test',
            artist: 'นายวิชัย สร้างสรรค์',
            concept: 'การแสดงออกถึงความฝันที่แตกสลายผ่านเทคนิคการแยกส่วนและประกอบใหม่ ด้วยการใช้สีที่คมชัดและรูปทรงที่ไม่สมดุล',
            image: 'https://images.unsplash.com/photo-1569701280402-dd2e7b9eeba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'cubism'
        },
        {
            id: 'cubism-5',
            title: 'Fragmented City',
            artist: 'นางสาวกัญญา ศิลป์ธารา',
            concept: 'สะท้อนภาพเมืองสมัยใหม่ที่ถูกแยกเป็นเสี้ยวส่วนและรวมใหม่เป็นโครงสร้างที่ซับซ้อน',
            image: 'https://via.placeholder.com/800x600?text=Cubism+5',
            category: 'cubism'
        },
        {
            id: 'cubism-6',
            title: 'Echo of Shapes',
            artist: 'นายอรรถพล วิริยะ',
            concept: 'การทับซ้อนของรูปทรงเรขาคณิตที่ก้องสะท้อนกันไปมา เกิดเป็นภาพลวงตาที่น่าติดตาม',
            image: 'https://via.placeholder.com/800x600?text=Cubism+6',
            category: 'cubism'
        },
        {
            id: 'cubism-7',
            title: 'Silent Geometry',
            artist: 'นางสาวพรทิพย์ พิริยะ',
            concept: 'ความเงียบงันที่ถูกบันทึกผ่านรูปทรงเรขาคณิตสีเข้มและการจัดองค์ประกอบอย่างรัดกุม',
            image: 'https://via.placeholder.com/800x600?text=Cubism+7',
            category: 'cubism'
        },
        {
            id: 'cubism-8',
            title: 'Disrupted Harmony',
            artist: 'นายกฤษณะ ภูวดล',
            concept: 'ความกลมกลืนที่ถูกทำลายแล้วประกอบใหม่จนเกิดการตีความใหม่ในมุมมองของศิลปิน',
            image: 'https://via.placeholder.com/800x600?text=Cubism+8',
            category: 'cubism'
        },
        {
            id: 'cubism-9',
            title: 'Color Collision',
            artist: 'นางสาวชุติมา เกรียงไกร',
            concept: 'การปะทะของสีที่รุนแรงและไม่คาดคิด ทำให้เกิดพลังงานใหม่ในผลงาน',
            image: 'https://via.placeholder.com/800x600?text=Cubism+9',
            category: 'cubism'
        },
        {
            id: 'cubism-10',
            title: 'Shattered Reflections',
            artist: 'นายประเสริฐ จันทรา',
            concept: 'การสะท้อนที่แตกสลายของวัตถุในกระจก ถูกถ่ายทอดด้วยเส้นสายคมชัด',
            image: 'https://via.placeholder.com/800x600?text=Cubism+10',
            category: 'cubism'
        },
        {
            id: 'cubism-11',
            title: 'Fragments of Time',
            artist: 'นางสาวอัญชลี อุดมพร',
            concept: 'ช่วงเวลาที่แตกออกเป็นเสี้ยวส่วน เล่าเรื่องราวต่างยุคต่างสมัยบนผืนเดียวกัน',
            image: 'https://via.placeholder.com/800x600?text=Cubism+11',
            category: 'cubism'
        },
        {
            id: 'cubism-12',
            title: 'Broken Rhythm',
            artist: 'นายสมบัติ ภักดี',
            concept: 'จังหวะที่ถูกขัดจังหวะและแยกส่วน กลายเป็นทำนองใหม่ในรูปทรงและสีสัน',
            image: 'https://via.placeholder.com/800x600?text=Cubism+12',
            category: 'cubism'
        },
        {
            id: 'cubism-13',
            title: 'Constructed Illusion',
            artist: 'นางสาววรรณา โชติวัฒน์',
            concept: 'การสร้างภาพลวงตาที่เกิดจากการจัดวางรูปทรงเหลี่ยมซ้อนทับกัน',
            image: 'https://via.placeholder.com/800x600?text=Cubism+13',
            category: 'cubism'
        },
        {
            id: 'cubism-14',
            title: 'Chaotic Balance',
            artist: 'นายสิทธิชัย บรรเจิด',
            concept: 'ความวุ่นวายที่ดูเหมือนไร้ระเบียบแต่จริง ๆ แล้วมีสมดุลในเชิงศิลป์',
            image: 'https://via.placeholder.com/800x600?text=Cubism+14',
            category: 'cubism'
        },
        {
            id: 'cubism-15',
            title: 'Fragmented Soul',
            artist: 'นางสาวจิราภรณ์ วัฒนกิจ',
            concept: 'การแสดงออกถึงจิตวิญญาณที่แตกสลายและรวมตัวใหม่ด้วยโทนสีเข้ม',
            image: 'https://via.placeholder.com/800x600?text=Cubism+15',
            category: 'cubism'
        },
        {
            id: 'cubism-16',
            title: 'Geometric Echoes',
            artist: 'นายภาณุวัฒน์ สายชล',
            concept: 'เสียงสะท้อนจากรูปทรงเรขาคณิตที่ทับซ้อนกันจนเกิดมิติที่ซ่อนอยู่',
            image: 'https://via.placeholder.com/800x600?text=Cubism+16',
            category: 'cubism'
        },
        {
            id: 'cubism-17',
            title: 'Fractured Emotions',
            artist: 'นางสาวสิริมา บำรุง',
            concept: 'อารมณ์ที่แตกหักและปะติดปะต่อกันใหม่ กลายเป็นเรื่องราวที่ไม่สมบูรณ์แต่มีพลัง',
            image: 'https://via.placeholder.com/800x600?text=Cubism+17',
            category: 'cubism'
        },
        {
            id: 'cubism-18',
            title: 'Dimensional Layers',
            artist: 'นายวชิรวิทย์ ศักดิ์สกุล',
            concept: 'การวางชั้นมิติหลายระดับในภาพเดียวเพื่อให้เกิดความลึกซึ้งและการมองหลายมุม',
            image: 'https://via.placeholder.com/800x600?text=Cubism+18',
            category: 'cubism'
        },
        {
            id: 'cubism-19',
            title: 'Scattered Identity',
            artist: 'นางสาววรัชญา สุขสันต์',
            concept: 'อัตลักษณ์ที่กระจัดกระจายแต่ยังมีความเชื่อมโยงในแก่นสารเดียวกัน',
            image: 'https://via.placeholder.com/800x600?text=Cubism+19',
            category: 'cubism'
        },
        {
            id: 'cubism-20',
            title: 'Crystalized Dreams',
            artist: 'นายพีรพล บุญญา',
            concept: 'ความฝันที่ถูกทำให้แข็งแกร่งราวกับผลึก แตกสลายแต่คงความงดงาม',
            image: 'https://via.placeholder.com/800x600?text=Cubism+20',
            category: 'cubism'
        },
        {
            id: 'cubism-21',
            title: 'Disjointed Reality',
            artist: 'นางสาวฐิติมา ไพศาล',
            concept: 'โลกแห่งความจริงที่ถูกแยกเป็นเสี้ยว ๆ และประกอบใหม่เป็นภาพใหม่',
            image: 'https://via.placeholder.com/800x600?text=Cubism+21',
            category: 'cubism'
        },
        {
            id: 'cubism-22',
            title: 'The Broken Mask',
            artist: 'นายกฤตเมธ สงวนศิลป์',
            concept: 'หน้ากากที่แตกหักเผยให้เห็นตัวตนภายในที่ซ่อนอยู่ภายใต้โครงสร้างเหลี่ยมมุม',
            image: 'https://via.placeholder.com/800x600?text=Cubism+22',
            category: 'cubism'
        },
        {
            id: 'cubism-23',
            title: 'Shards of Light',
            artist: 'นางสาวธิดารัตน์ วัฒนะ',
            concept: 'แสงที่แตกออกเป็นเสี้ยว ๆ แล้วสะท้อนกระจายทั่วทั้งภาพ',
            image: 'https://via.placeholder.com/800x600?text=Cubism+23',
            category: 'cubism'
        },
        {
            id: 'cubism-24',
            title: 'Fragmented Silence',
            artist: 'นายอานนท์ จิตสงบ',
            concept: 'ความเงียบที่ไม่ต่อเนื่องเหมือนเสียงที่ขาดหาย กลายเป็นพลังงานในเชิงศิลป์',
            image: 'https://via.placeholder.com/800x600?text=Cubism+24',
            category: 'cubism'
        },
        {
            id: 'cubism-25',
            title: 'Broken Continuity',
            artist: 'นางสาวชลธิชา กาญจนา',
            concept: 'ความต่อเนื่องที่ถูกแยกออกเป็นส่วน ๆ แต่เมื่อมองรวมกลับกลายเป็นความสมบูรณ์ใหม่',
            image: 'https://via.placeholder.com/800x600?text=Cubism+25',
            category: 'cubism'
        },
        {
            id: 'cubism-26',
            title: 'Distorted Pathways',
            artist: 'นายณัฐพล มีศักดิ์',
            concept: 'เส้นทางที่บิดเบี้ยวจนหาทิศทางไม่เจอ สะท้อนความสับสนในชีวิต',
            image: 'https://via.placeholder.com/800x600?text=Cubism+26',
            category: 'cubism'
        },
        {
            id: 'cubism-27',
            title: 'Fragmented Vision',
            artist: 'นางสาวสุชาดา รัตนพร',
            concept: 'สายตาที่มองโลกแตกออกเป็นส่วน ๆ ก่อนประกอบกลับด้วยการตีความใหม่',
            image: 'https://via.placeholder.com/800x600?text=Cubism+27',
            category: 'cubism'
        },
        {
            id: 'cubism-28',
            title: 'Broken Gravity',
            artist: 'นายศรายุทธ พัฒนกิจ',
            concept: 'แรงโน้มถ่วงที่ถูกทำลาย ทำให้วัตถุล่องลอยและแตกกระจัดกระจาย',
            image: 'https://via.placeholder.com/800x600?text=Cubism+28',
            category: 'cubism'
        },
        {
            id: 'cubism-29',
            title: 'Echoing Fragments',
            artist: 'นางสาวพิมพ์ชนก บุญเรือง',
            concept: 'เสี้ยวส่วนที่ก้องสะท้อนซ้ำแล้วซ้ำเล่า เกิดเป็นความทรงจำที่ไม่เคยหายไป',
            image: 'https://via.placeholder.com/800x600?text=Cubism+29',
            category: 'cubism'
        },
        {
            id: 'cubism-30',
            title: 'Chaotic Frames',
            artist: 'นายธีรภัทร วัฒนกุล',
            concept: 'กรอบที่ไร้ระเบียบแต่กลับสร้างสมดุลในความวุ่นวาย',
            image: 'https://via.placeholder.com/800x600?text=Cubism+30',
            category: 'cubism'
        },
        {
            id: 'cubism-31',
            title: 'Mosaic of Thoughts',
            artist: 'นางสาวชญานิศ วงศ์สถิตย์',
            concept: 'ความคิดที่แตกเป็นชิ้นเล็กชิ้นน้อยเหมือนโมเสก แต่ยังคงความเชื่อมโยง',
            image: 'https://via.placeholder.com/800x600?text=Cubism+31',
            category: 'cubism'
        },
        {
            id: 'cubism-32',
            title: 'Shattered Colors',
            artist: 'นายปริญญา ตั้งเจริญ',
            concept: 'สีที่แตกออกเป็นชิ้นเล็ก ๆ แล้วกลับรวมตัวเป็นพลังงานใหม่',
            image: 'https://via.placeholder.com/800x600?text=Cubism+32',
            category: 'cubism'
        },
        {
            id: 'cubism-33',
            title: 'Fragmented Nature',
            artist: 'นางสาวสุภัทรา ธรรมกุล',
            concept: 'ธรรมชาติที่ถูกแยกส่วนออกมาเป็นภาพเล็ก ๆ แต่ยังคงความงามในทุกชิ้นส่วน',
            image: 'https://via.placeholder.com/800x600?text=Cubism+33',
            category: 'cubism'
        },
        {
            id: 'cubism-34',
            title: 'Distorted Silence',
            artist: 'นายวิชญ์พล กิตติการ',
            concept: 'ความเงียบที่บิดเบี้ยวจนกลายเป็นเสียงที่ไม่ได้ยินแต่สัมผัสได้',
            image: 'https://via.placeholder.com/800x600?text=Cubism+34',
            category: 'cubism'
        },
        {
            id: 'cubism-35',
            title: 'Broken Echo',
            artist: 'นางสาวศุภานัน รุ่งเรือง',
            concept: 'เสียงสะท้อนที่แตกออกเป็นเสี้ยวเล็ก ๆ แต่ยังคงก้องกังวานในความทรงจำ',
            image: 'https://via.placeholder.com/800x600?text=Cubism+35',
            category: 'cubism'
        },
        {
            id: 'cubism-36',
            title: 'Fragmented Horizon',
            artist: 'นายธนกฤต ชัยมงคล',
            concept: 'เส้นขอบฟ้าที่ถูกแบ่งออกเป็นชิ้นส่วนเล็ก ๆ ราวกับโลกกำลังแตกออกเป็นหลายมิติ',
            image: 'https://via.placeholder.com/800x600?text=Cubism+36',
            category: 'cubism'
        },
        {
            id: 'cubism-37',
            title: 'Broken Path',
            artist: 'นางสาวศศิธร นิลกาญจน์',
            concept: 'เส้นทางชีวิตที่ไม่ต่อเนื่อง เต็มไปด้วยการแยกส่วนและความไม่แน่นอน',
            image: 'https://via.placeholder.com/800x600?text=Cubism+37',
            category: 'cubism'
        },
        {
            id: 'cubism-38',
            title: 'Reflections in Pieces',
            artist: 'นายชวลิต ดวงแก้ว',
            concept: 'ภาพสะท้อนที่แตกออกเป็นเสี้ยว ๆ เผยให้เห็นความจริงหลายด้านที่ซ่อนอยู่',
            image: 'https://via.placeholder.com/800x600?text=Cubism+38',
            category: 'cubism'
        },
        {
            id: 'cubism-39',
            title: 'Dispersed Emotions',
            artist: 'นางสาวอรัญญา วัฒนกิจ',
            concept: 'อารมณ์ที่กระจัดกระจายเป็นชิ้นเล็ก ๆ แต่เมื่อรวมกันกลับมีความหมายลึกซึ้ง',
            image: 'https://via.placeholder.com/800x600?text=Cubism+39',
            category: 'cubism'
        },
        {
            id: 'cubism-40',
            title: 'Reassembled Reality',
            artist: 'นายเดชากร สุริยงค์',
            concept: 'โลกแห่งความจริงที่ถูกแยกส่วนแล้วประกอบขึ้นใหม่ เป็นการตีความใหม่ในมุมมองของศิลปิน',
            image: 'https://via.placeholder.com/800x600?text=Cubism+40',
            category: 'cubism'
        }
        
    ],
    popup: [
        {
            id: 'popup-1',
            title: 'Interactive Dreams', //best5
            artist: 'นายกิตติ นวัตกรรม',
            concept: 'งานศิลปะแบบ Pop-up ที่เชิญชวนให้ผู้ชมได้มีปฏิสัมพันธ์และสัมผัส ผ่านการออกแบบที่ผสมผสานระหว่างกายภาพและดิจิทัล สร้างประสบการณ์ใหม่ในการรับชมศิลปะ',
            image: 'https://images.unsplash.com/photo-1594736797933-d0c6eb5523b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-2',
            title: 'Surprise Elements',
            artist: ['test1', 'test2'],
            concept: 'การสร้างความประหลาดใจด้วยองค์ประกอบที่โผล่ออกมาจากผืนผ้าใบ เชิญชวนให้ผู้ชมได้สำรวจและค้นพบรายละเอียดที่ซ่อนเร้น',
            image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-3',
            title: 'Interactive Shapes',
            artist: 'นายธีรเดช รูปทรง',
            concept: 'งานศิลปะที่ให้ผู้ชมสามารถปรับเปลี่ยนรูปทรงและองค์ประกอบได้เอง สร้างประสบการณ์แบบอินเทอร์แอคทีฟ',
            image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-4',
            title: 'Folded Worlds',
            artist: 'นางสาวปาริชาต โลกพับ',
            concept: 'นำเสนอโลกจำลองผ่านการพับกระดาษและวัสดุต่าง ๆ ให้ผู้ชมเห็นมิติซ่อนเร้น',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-5',
            title: 'Hidden Pathways',
            artist: 'นายกิตติพงษ์ ทางลับ',
            concept: 'ออกแบบเส้นทางซ่อนเร้นให้ผู้ชมสำรวจผ่านโครงสร้างสามมิติและชั้นวางของ',
            image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-6',
            title: 'Pop Up Nature',
            artist: 'นางสาวมัลลิกา ธรรมชาติ',
            concept: 'สร้างองค์ประกอบธรรมชาติที่โผล่ขึ้นมาจากพื้นผิว สื่อถึงความมีชีวิตของสิ่งแวดล้อม',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-7',
            title: 'Surreal Pop',
            artist: 'นายอนันต์ ฝันประหลาด',
            concept: 'ผสมผสานองค์ประกอบเหนือจริงที่โผล่ขึ้นมาจากผืนผ้าใบ สร้างประสบการณ์เหนือจริงแก่ผู้ชม',
            image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-8',
            title: 'Geometric Layers',
            artist: 'นางสาวณัฐชยา รูปเรขาคณิต',
            concept: 'ใช้เลเยอร์ของรูปทรงเรขาคณิตโผล่ขึ้นจากผืนผ้าใบ สร้างมิติและความลึก',
            image: 'https://images.unsplash.com/photo-1522202225347-c7f0ffec1f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-9',
            title: 'Mystery Boxes',
            artist: 'นายพีรพล กล่องลึกลับ',
            concept: 'ติดตั้งกล่องและองค์ประกอบที่ซ่อนอยู่เพื่อให้ผู้ชมได้เปิดและค้นพบรายละเอียด',
            image: 'https://images.unsplash.com/photo-1580584124099-3c5f32b0a8f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-10',
            title: 'Pop Up Architecture',
            artist: 'นางสาวปิยพร สถาปัตย์',
            concept: 'สร้างสถาปัตยกรรมสามมิติที่โผล่ขึ้นจากฐาน ให้ผู้ชมเห็นรูปแบบและมิติที่แปลกตา',
            image: 'https://images.unsplash.com/photo-1520975698516-19f7e5cb0c8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-11',
            title: 'Floating Elements',
            artist: 'นายธนกร ลอยตัว',
            concept: 'องค์ประกอบที่ดูเหมือนลอยกลางอากาศ เพิ่มมิติและความน่าสนใจให้ผู้ชม',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-12',
            title: 'Interactive Shadows',
            artist: 'นางสาวอริสรา เงา',
            concept: 'สร้างงานที่เงาขององค์ประกอบเปลี่ยนไปตามมุมมองของผู้ชม สร้างประสบการณ์โต้ตอบ',
            image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-13',
            title: 'Paper Jungle',
            artist: 'นายสมชาย ป่า',
            concept: 'สร้างป่าจากกระดาษที่โผล่ขึ้นมาหลายชั้น ให้ผู้ชมรู้สึกเหมือนอยู่กลางธรรมชาติ',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-14',
            title: 'Puzzle Pop',
            artist: 'นางสาววิจิตรา ปริศนา',
            concept: 'งานที่ผู้ชมสามารถประกอบและแก้ปริศนาเพื่อเปิดเผยองค์ประกอบที่ซ่อนอยู่',
            image: 'https://images.unsplash.com/photo-1511974035430-5de47d3b95da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-15',
            title: 'Layered Stories',
            artist: 'นายกิตติพงษ์ ชั้นเรื่อง',
            concept: 'ใช้ชั้นของภาพและวัสดุสร้างเรื่องราวซ้อนกันให้ผู้ชมได้ค้นพบ',
            image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-16',
            title: 'Pop Up Collage',
            artist: 'นางสาวมัลลิกา คอลลาจ',
            concept: 'สร้างภาพคอลลาจสามมิติที่โผล่ออกมา ให้ผู้ชมเห็นความหลากหลายของวัสดุและสีสัน',
            image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-17',
            title: 'Kinetic Pop',
            artist: 'นายอนันต์ เคลื่อนไหว',
            concept: 'องค์ประกอบที่เคลื่อนไหวได้เมื่อผู้ชมสัมผัสหรือหมุน สร้างประสบการณ์แบบโต้ตอบ',
            image: 'https://images.unsplash.com/photo-1523362628745-0c100150b37c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-18',
            title: 'Mystic Pop',
            artist: 'นางสาวสุภาพร ลึกลับ',
            concept: 'สร้างงานที่ซ่อนความลึกลับและสัญลักษณ์ซ้อนกัน ให้ผู้ชมได้ค้นหาความหมาย',
            image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-19',
            title: 'Folded Fantasy',
            artist: 'นายธีรเดช จินตนาการ',
            concept: 'ใช้การพับและเลเยอร์สร้างโลกแฟนตาซีให้โผล่ออกมาจากผืนผ้าใบ',
            image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-20',
            title: 'Paper Mountains',
            artist: 'นางสาวปาริชาต ภูเขา',
            concept: 'สร้างภูเขาจากกระดาษและวัสดุหลายชั้น ให้ผู้ชมเห็นมิติและความสูงต่ำของภูมิประเทศ',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-21',
            title: 'Interactive Faces',
            artist: 'นายกิตติพงษ์ หน้า',
            concept: 'สร้างใบหน้าที่ผู้ชมสามารถปรับเปลี่ยนตำแหน่งและการแสดงออกได้เอง',
            image: 'https://images.unsplash.com/photo-1522202225347-c7f0ffec1f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-22',
            title: 'Pop Up City',
            artist: 'นางสาวณัฐชยา เมือง',
            concept: 'สร้างเมืองจำลองสามมิติที่โผล่ออกมาจากฐาน ให้ผู้ชมเห็นมิติและองค์ประกอบเมือง',
            image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-23',
            title: 'Hidden Creatures',
            artist: 'นางสาววิจิตรา สัตว์',
            concept: 'ซ่อนสิ่งมีชีวิตเล็กๆ ในงานสามมิติให้ผู้ชมค้นหาและสำรวจ',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-24',
            title: 'Layered Letters',
            artist: 'นายสมชาย ตัวอักษร',
            concept: 'ใช้ตัวอักษรหลายชั้นโผล่ขึ้นจากฐาน สร้างข้อความที่ผู้ชมสามารถค้นพบทีละชั้น',
            image: 'https://images.unsplash.com/photo-1511974035430-5de47d3b95da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-25',
            title: 'Pop Up Garden',
            artist: 'นางสาวมัลลิกา สวน',
            concept: 'สร้างสวนสามมิติที่โผล่ออกมาจากผืนผ้าใบ ให้ผู้ชมรู้สึกเหมือนอยู่ท่ามกลางธรรมชาติ',
            image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-26',
            title: 'Floating Words',
            artist: 'นายอนันต์ คำ',
            concept: 'ใช้คำและประโยคที่ลอยขึ้นจากฐาน สร้างข้อความโต้ตอบกับผู้ชม',
            image: 'https://images.unsplash.com/photo-1523362628745-0c100150b37c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-27',
            title: 'Pop Up Ocean',
            artist: 'นางสาวสุภาพร ทะเล',
            concept: 'สร้างโลกใต้น้ำสามมิติที่โผล่ขึ้นมาจากฐาน ให้ผู้ชมสำรวจความหลากหลายของสัตว์น้ำ',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-28',
            title: 'Mystery Layers',
            artist: 'นายธีรเดช เลเยอร์',
            concept: 'ซ่อนองค์ประกอบหลายชั้นให้ผู้ชมค่อยๆ เปิดเผยและค้นพบเรื่องราว',
            image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-29',
            title: 'Interactive Forest',
            artist: 'นางสาวปาริชาต ป่า',
            concept: 'สร้างป่าจำลองที่ผู้ชมสามารถโต้ตอบและปรับเปลี่ยนองค์ประกอบได้เอง',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-30',
            title: 'Pop Up Adventure',
            artist: 'นายกิตติพงษ์ การผจญภัย',
            concept: 'สร้างฉากการผจญภัยสามมิติที่โผล่ออกมาจากฐาน ให้ผู้ชมรู้สึกมีส่วนร่วม',
            image: 'https://images.unsplash.com/photo-1522202225347-c7f0ffec1f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-31',
            title: 'Floating Islands',
            artist: 'นางสาวณัฐชยา เกาะลอย',
            concept: 'สร้างเกาะลอยสามมิติที่โผล่ออกมาจากฐาน เพิ่มมิติและความสนุกให้ผู้ชม',
            image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-32',
            title: 'Pop Up Maze',
            artist: 'นายพีรพล เขาวงกต',
            concept: 'สร้างเขาวงกตสามมิติที่ผู้ชมสามารถสำรวจและค้นหาเส้นทาง',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-33',
            title: 'Hidden Treasures',
            artist: 'นางสาววิจิตรา สมบัติ',
            concept: 'ซ่อนสมบัติและรายละเอียดเล็กๆ ภายในงานให้ผู้ชมค้นหาและสนุกไปกับการสำรวจ',
            image: 'https://images.unsplash.com/photo-1511974035430-5de47d3b95da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-34',
            title: 'Pop Up Circus',
            artist: 'นายสมชาย ความสนุก',
            concept: 'สร้างงานธีมละครสัตว์สามมิติที่โผล่ออกมาจากฐาน สร้างความบันเทิงแก่ผู้ชม',
            image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-35',
            title: 'Interactive Animals',
            artist: 'นางสาวมัลลิกา สัตว์',
            concept: 'สร้างสัตว์สามมิติที่ผู้ชมสามารถปรับเปลี่ยนท่าทางหรือองค์ประกอบได้เอง',
            image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-36',
            title: 'Pop Up Music',
            artist: 'นายอนันต์ เสียง',
            concept: 'สร้างเครื่องดนตรีและฉากดนตรีโผล่ขึ้นจากฐาน สร้างความสนุกให้ผู้ชม',
            image: 'https://images.unsplash.com/photo-1523362628745-0c100150b37c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-37',
            title: 'Floating Geometry',
            artist: 'นางสาวสุภาพร รูปทรง',
            concept: 'สร้างรูปทรงเรขาคณิตที่ลอยขึ้นจากฐาน เพิ่มมิติและความลึกให้กับงาน',
            image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-38',
            title: 'Pop Up Stories',
            artist: 'นายธีรเดช เรื่องราว',
            concept: 'เล่าเรื่องผ่านชั้นและองค์ประกอบที่โผล่ขึ้นมา ให้ผู้ชมสำรวจทีละชั้น',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-39',
            title: 'Hidden Messages',
            artist: 'นางสาวปาริชาต ข้อความ',
            concept: 'ซ่อนข้อความและรายละเอียดลับให้ผู้ชมค้นพบและตีความเอง',
            image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        },
        {
            id: 'popup-40',
            title: 'Pop Up Festival',
            artist: 'นายกิตติพงษ์ เทศกาล',
            concept: 'สร้างงานธีมเทศกาลสามมิติที่โผล่ออกมาจากฐาน ให้ผู้ชมมีส่วนร่วม',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popup'
        }
    ],
    popart: [
        {
            id: 'popart-1', // best2
            title: 'Urban Bangkok',
            artist: 'test11',
            concept: 'การตีความใหม่ของวัฒนธรรมป๊อปผ่านมุมมองของเมืองกรุงเทพฯ ด้วยการใช้สีสันจัดจ้านและการทำซ้ำของภาพที่เป็นสัญลักษณ์ของความเป็นเมือง',
            image: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-2',
            title: 'Digital Generation',
            artist: 'นายธนา สมัยใหม่',
            concept: 'สะท้อนพฤติกรรมและวิถีชีวิตของคนรุ่นใหม่ในยุคโซเชียลมีเดีย ผ่านการนำเสนอภาพที่คุ้นเคยในชีวิตประจำวันแต่ด้วยมุมมองที่แหลมคม',
            image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-3',
            title: 'Consumer Culture',
            artist: 'นายประชา วิพากษ์',
            concept: 'วิจารณ์วัฒนธรรมการบริโภคผ่านการนำเสนอสินค้าและแบรนด์ในรูปแบบศิลปะป๊อป โดยเน้นการใช้สีและการทำซ้ำเพื่อสร้างผลกระทบทางสายตา',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-4',
            title: 'Celebrity Icons',
            artist: 'นางสาวจารุวรรณ ดารา',
            concept: 'นำเสนอไอคอนดาราผ่านศิลปะป๊อป ใช้สีสันสดใสและการซ้ำภาพเพื่อเน้นความโดดเด่น',
            image: 'https://images.unsplash.com/photo-1581091012184-7a84c5aafbbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-5',
            title: 'Comic Strip Life',
            artist: 'นายธีรเดช การ์ตูน',
            concept: 'ถ่ายทอดเรื่องราวชีวิตประจำวันในรูปแบบแถบการ์ตูน ใช้สีสดและเส้นคม',
            image: 'https://images.unsplash.com/photo-1552832231-5a1a13f10450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-6',
            title: 'Fast Food Mania',
            artist: 'นางสาวณิชา กินดี',
            concept: 'วิจารณ์วัฒนธรรมอาหารจานด่วนผ่านศิลปะป๊อป ใช้สีฉูดฉาดและภาพซ้ำ',
            image: 'https://images.unsplash.com/photo-1606851095934-fd6b21d03392?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-7',
            title: 'Advertising Explosion',
            artist: 'นายกิตติพงษ์ โฆษณา',
            concept: 'สำรวจอิทธิพลของโฆษณาผ่านศิลปะป๊อป ใช้สีสันและภาพซ้ำเพื่อเน้นความรุนแรงของการตลาด',
            image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-8',
            title: 'Music Icons',
            artist: 'นางสาววิจิตรา ดนตรี',
            concept: 'นำไอคอนดนตรีมาสร้างเป็นงานศิลปะป๊อป ใช้สีจัดและการทำซ้ำภาพเพื่อสร้างพลัง',
            image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-9',
            title: 'Technology Obsession',
            artist: 'นายอนันต์ ไอที',
            concept: 'สะท้อนความหมกมุ่นกับเทคโนโลยีผ่านศิลปะป๊อป ใช้ภาพอุปกรณ์และสีสันจัดจ้าน',
            image: 'https://images.unsplash.com/photo-1581092795367-10ff8cfa022b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-10',
            title: 'Street Culture',
            artist: 'นางสาวพิมพ์ชนก สตรีท',
            concept: 'แสดงวัฒนธรรมถนนในศิลปะป๊อป ใช้สีสดใสและกราฟิกซ้ำเพื่อเน้นความเคลื่อนไหว',
            image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-11',
            title: 'Fashion Frenzy',
            artist: 'นางสาวปาริชาต แฟชั่น',
            concept: 'สะท้อนกระแสแฟชั่นผ่านศิลปะป๊อป ใช้สีสันสดและการทำซ้ำภาพแฟชั่นไอคอน',
            image: 'https://images.unsplash.com/photo-1555529669-0aa02a2c5b82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-12',
            title: 'Cultural Icons',
            artist: 'นายวสันต์ ศิลป์ไทย',
            concept: 'นำสัญลักษณ์ทางวัฒนธรรมมาสร้างเป็นศิลปะป๊อป ใช้สีสันจัดและภาพซ้ำเพื่อเน้นเอกลักษณ์',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-13',
            title: 'Comic Heroes',
            artist: 'นายธีรเดช การ์ตูน',
            concept: 'นำซูเปอร์ฮีโร่มาสร้างเป็นศิลปะป๊อป ใช้สีสดและเส้นคมชัด',
            image: 'https://images.unsplash.com/photo-1526779259212-5fdf03c10f1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-14',
            title: 'Advertising Icons',
            artist: 'นางสาวอริสรา โฆษณา',
            concept: 'เน้นไอคอนแบรนด์และป้ายโฆษณาในรูปแบบศิลปะป๊อป ใช้สีฉูดฉาดและภาพซ้ำ',
            image: 'https://images.unsplash.com/photo-1555529771-7ec7c26f2e28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-15',
            title: 'Urban Life',
            artist: 'นายกิตติพงษ์ เมือง',
            concept: 'สะท้อนชีวิตเมืองผ่านศิลปะป๊อป ใช้สีสดและภาพซ้ำเพื่อสร้างความเคลื่อนไหว',
            image: 'https://images.unsplash.com/photo-1520975698516-19f7e5cb0c8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-16',
            title: 'Pop Icons',
            artist: 'นางสาวณัฐชยา ศิลปะ',
            concept: 'นำไอคอนป๊อปมาออกแบบใหม่โดยใช้สีจัดจ้านและการซ้ำภาพเพื่อเน้นตัวตน',
            image: 'https://images.unsplash.com/photo-1522202225347-c7f0ffec1f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-17',
            title: 'Food Culture',
            artist: 'นายพีรพล กินดี',
            concept: 'สะท้อนวัฒนธรรมอาหารในศิลปะป๊อป ใช้สีสดและภาพซ้ำอาหารไอคอน',
            image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-18',
            title: 'Toy Mania',
            artist: 'นางสาวปิยพร ของเล่น',
            concept: 'นำของเล่นยอดนิยมมาสร้างเป็นงานศิลปะป๊อป ใช้สีสดและภาพซ้ำเพื่อสร้างความสนุก',
            image: 'https://images.unsplash.com/photo-1523362628745-0c100150b37c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-19',
            title: 'Movie Madness',
            artist: 'นายอานันท์ ภาพยนตร์',
            concept: 'สร้างงานศิลปะป๊อปจากภาพยนตร์ ใช้สีจัดและภาพซ้ำเพื่อเน้นความโดดเด่นของฉาก',
            image: 'https://images.unsplash.com/photo-1542204165-3d8d9b0e0d08?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-20',
            title: 'Retro Ads',
            artist: 'นางสาววราภรณ์ โฆษณาเก่า',
            concept: 'นำโฆษณาเก่าสไตล์เรโทรมาสร้างงานป๊อป ใช้สีฉูดฉาดและซ้ำภาพเพื่อสร้างผลกระทบทางสายตา',
            image: 'https://images.unsplash.com/photo-1511974035430-5de47d3b95da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-21',
            title: 'Iconic Brands',
            artist: 'นายธนกร แบรนด์',
            concept: 'นำแบรนด์ที่เป็นสัญลักษณ์มาออกแบบเป็นศิลปะป๊อป ใช้สีสดและการทำซ้ำภาพ',
            image: 'https://images.unsplash.com/photo-1571794136475-32dbf1f879aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-22',
            title: 'Urban Signs',
            artist: 'นางสาวอริสรา เมือง',
            concept: 'นำป้ายเมืองและสัญลักษณ์ทางถนนมาสร้างงานศิลปะป๊อป ใช้สีจัดและภาพซ้ำ',
            image: 'https://images.unsplash.com/photo-1515587949141-4b7e69e7d8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-23',
            title: 'Music Posters',
            artist: 'นายณัฐวุฒิ ดนตรี',
            concept: 'สร้างงานป๊อปจากโปสเตอร์ดนตรี ใช้สีสดและซ้ำภาพเพื่อเน้นจังหวะ',
            image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-24',
            title: 'Sports Mania',
            artist: 'นางสาวกุลธิดา กีฬา',
            concept: 'นำกีฬาและไอคอนนักกีฬามาออกแบบในรูปแบบป๊อป ใช้สีสดและภาพซ้ำ',
            image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-25',
            title: 'Pop Culture Icons',
            artist: 'นายสมชาย ป๊อป',
            concept: 'รวมไอคอนป๊อปต่างๆ มาสร้างงานศิลปะ ใช้สีสันจัดและภาพซ้ำเพื่อเน้นตัวตน',
            image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-26',
            title: 'Social Media Obsession',
            artist: 'นางสาววิจิตรา โซเชียล',
            concept: 'สะท้อนความหมกมุ่นกับโซเชียลมีเดียผ่านศิลปะป๊อป ใช้สีฉูดฉาดและภาพซ้ำ',
            image: 'https://images.unsplash.com/photo-1532635247-8aa1b0bcb9de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-27',
            title: 'Toy Ads',
            artist: 'นายธีรเดช ของเล่น',
            concept: 'นำโฆษณาของเล่นมาสร้างงานป๊อป ใช้สีสดและภาพซ้ำเพื่อเน้นความสนุก',
            image: 'https://images.unsplash.com/photo-1580584124099-3c5f32b0a8f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-28',
            title: 'Retro Music',
            artist: 'นางสาวอริสรา ดนตรีเก่า',
            concept: 'นำเพลงเก่าและโปสเตอร์ดนตรีมาสร้างงานป๊อป ใช้สีฉูดฉาดและซ้ำภาพ',
            image: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-29',
            title: 'Street Fashion',
            artist: 'นายกิตติพงษ์ แฟชั่น',
            concept: 'สะท้อนแฟชั่นถนนผ่านศิลปะป๊อป ใช้สีสดและภาพซ้ำเพื่อเน้นสไตล์',
            image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-30',
            title: 'Movie Posters',
            artist: 'นางสาวณัฐชยา ภาพยนตร์',
            concept: 'สร้างโปสเตอร์ภาพยนตร์ในสไตล์ป๊อป ใช้สีจัดและภาพซ้ำเพื่อเน้นฉากสำคัญ',
            image: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-31',
            title: 'Advertising Fun',
            artist: 'นายพีรพล โฆษณา',
            concept: 'นำโฆษณาสนุกๆ มาสร้างงานป๊อป ใช้สีสดและภาพซ้ำเพื่อเน้นความสนุก',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-32',
            title: 'Cartoon Mania',
            artist: 'นางสาวปาริชาต การ์ตูน',
            concept: 'นำตัวละครการ์ตูนมาสร้างงานป๊อป ใช้สีสดและภาพซ้ำเพื่อเน้นตัวละคร',
            image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-33',
            title: 'Icon Mashup',
            artist: 'นายธนกร ป๊อป',
            concept: 'ผสมผสานไอคอนหลายอย่างเป็นงานศิลปะป๊อป ใช้สีสดและภาพซ้ำสร้างเอกลักษณ์',
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-34',
            title: 'Toy Culture',
            artist: 'นางสาวปิยพร ของเล่น',
            concept: 'สะท้อนวัฒนธรรมของเล่นผ่านงานศิลปะป๊อป ใช้สีสดและซ้ำภาพ',
            image: 'https://images.unsplash.com/photo-1523362628745-0c100150b37c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-35',
            title: 'Celebrity Mania',
            artist: 'นางสาวจารุวรรณ ดารา',
            concept: 'แสดงความหลงใหลในดาราผ่านศิลปะป๊อป ใช้สีสดและภาพซ้ำเน้นบุคลิก',
            image: 'https://images.unsplash.com/photo-1581091012184-7a84c5aafbbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-36',
            title: 'Comic Mashup',
            artist: 'นายธีรเดช การ์ตูน',
            concept: 'ผสมตัวละครการ์ตูนหลายตัวเป็นงานป๊อป ใช้สีจัดและภาพซ้ำเพื่อเน้นความสนุก',
            image: 'https://images.unsplash.com/photo-1552832231-5a1a13f10450?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-37',
            title: 'Urban Ads',
            artist: 'นายกิตติพงษ์ โฆษณา',
            concept: 'นำป้ายและโฆษณาในเมืองมาสร้างงานป๊อป ใช้สีสดและซ้ำภาพ',
            image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-38',
            title: 'Music Mania',
            artist: 'นางสาววิจิตรา ดนตรี',
            concept: 'นำแนวดนตรีและนักดนตรีมาสร้างงานป๊อป ใช้สีสดและภาพซ้ำเพื่อสร้างพลัง',
            image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-39',
            title: 'Retro Icons',
            artist: 'นางสาววราภรณ์ เรโทร',
            concept: 'นำไอคอนเรโทรมาสร้างงานป๊อป ใช้สีสดและภาพซ้ำเพื่อเน้นความคลาสสิก',
            image: 'https://images.unsplash.com/photo-1511974035430-5de47d3b95da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        },
        {
            id: 'popart-40',
            title: 'Digital Pop',
            artist: 'นายอนันต์ ศิลป์ดิจิทัล',
            concept: 'ผสานศิลปะดิจิทัลกับป๊อป ใช้สีสันจัดและภาพซ้ำเพื่อสร้างความทันสมัย',
            image: 'https://images.unsplash.com/photo-1581092795367-10ff8cfa022b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'popart'
        }
    ],
    brochure: [
        {
            id: 'brochure-1',
            title: 'Thai Heritage Design', //best4
            artist: 'นางสาวสุดา ดีไซน์เนอร์',
            concept: 'การออกแบบโบรชัวร์ที่ผสานเอกลักษณ์ไทยกับความทันสมัย โดยการใช้ลวดลายไทยประยุกต์กับเทคนิคการออกแบบสมัยใหม่ เพื่อสื่อสารคุณค่าทางวัฒนธรรม',
            image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'brochure'
        },
        {
            id: 'brochure-2',
            title: 'Sustainable Tourism',
            artist: 'นายอนุชา เขียวใส',
            concept: 'งานออกแบบโบรชัวร์ท่องเที่ยวที่เน้นการท่องเที่ยวอย่างยั่งยืน ด้วยการใช้สีเขียวและองค์ประกอบธรรมชาติ เพื่อสื่อสารความสำคัญของการอนุรักษ์สิ่งแวดล้อม',
            image: 'https://images.unsplash.com/photo-1594736797933-d0c6eb5523b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'brochure'
        },
        {
            id: 'brochure-3',
            title: 'Healthy Living',
            artist: 'นางสาวมัลลิกา แพทย์ดี',
            concept: 'โบรชัวร์ส่งเสริมการใช้ชีวิตอย่างมีสุขภาพ ใช้โทนสีฟ้าและเขียวเพื่อสื่อความสดชื่นและความปลอดภัย',
            image: 'https://via.placeholder.com/800x600?text=Brochure+3',
            category: 'brochure'
        },
        {
            id: 'brochure-4',
            title: 'Cultural Festival',
            artist: 'นายวสันต์ ศิลป์ไทย',
            concept: 'การออกแบบโบรชัวร์สำหรับงานเทศกาลทางวัฒนธรรม ใช้ลวดลายไทยและสีสดเพื่อดึงดูดความสนใจ',
            image: 'https://via.placeholder.com/800x600?text=Brochure+4',
            category: 'brochure'
        },
        {
            id: 'brochure-5',
            title: 'Modern Architecture',
            artist: 'นางสาวสุรีย์พร ก่อสร้าง',
            concept: 'โบรชัวร์โปรโมทงานสถาปัตยกรรมสมัยใหม่ ใช้เส้นสายเรียบง่ายและภาพอาคารที่โดดเด่น',
            image: 'https://via.placeholder.com/800x600?text=Brochure+5',
            category: 'brochure'
        },
        {
            id: 'brochure-6',
            title: 'Organic Market',
            artist: 'นายกิตติพงษ์ เกษตรดี',
            concept: 'งานออกแบบที่เน้นการขายสินค้าออร์แกนิก ใช้โทนสีเขียวและน้ำตาลเพื่อสื่อถึงความเป็นธรรมชาติ',
            image: 'https://via.placeholder.com/800x600?text=Brochure+6',
            category: 'brochure'
        },
        {
            id: 'brochure-7',
            title: 'Music Festival',
            artist: 'นางสาวณิชา ดนตรีศิลป์',
            concept: 'โบรชัวร์โปรโมทเทศกาลดนตรี ใช้โทนสีสดใสและองค์ประกอบกราฟิกที่เป็นจังหวะ',
            image: 'https://via.placeholder.com/800x600?text=Brochure+7',
            category: 'brochure'
        },
        {
            id: 'brochure-8',
            title: 'Eco Travel',
            artist: 'นายสหาย รักษ์โลก',
            concept: 'ออกแบบโบรชัวร์ท่องเที่ยวเชิงอนุรักษ์ เน้นการใช้ภาพธรรมชาติและสีเขียวเป็นหลัก',
            image: 'https://via.placeholder.com/800x600?text=Brochure+8',
            category: 'brochure'
        },
        {
            id: 'brochure-9',
            title: 'Food Carnival',
            artist: 'นางสาววิจิตรา รสเลิศ',
            concept: 'โบรชัวร์งานคาร์นิวัลอาหาร ใช้ภาพอาหารสีสันสดใสและองค์ประกอบที่สร้างความอยากอาหาร',
            image: 'https://via.placeholder.com/800x600?text=Brochure+9',
            category: 'brochure'
        },
        {
            id: 'brochure-10',
            title: 'Tech Expo',
            artist: 'นายอานันต์ ไอที',
            concept: 'ออกแบบโบรชัวร์งานแสดงเทคโนโลยี ใช้กราฟิกแบบอนาคตและโทนสีน้ำเงิน-ดำ',
            image: 'https://via.placeholder.com/800x600?text=Brochure+10',
            category: 'brochure'
        },
        {
            id: 'brochure-11',
            title: 'Wellness Retreat',
            artist: 'นางสาวกมลพร สุขกาย',
            concept: 'โบรชัวร์รีทรีตเพื่อสุขภาพ ใช้โทนสีพาสเทลและภาพที่สื่อความสงบ',
            image: 'https://via.placeholder.com/800x600?text=Brochure+11',
            category: 'brochure'
        },
        {
            id: 'brochure-12',
            title: 'Art Workshop',
            artist: 'นายธีรเดช จิตรกร',
            concept: 'โบรชัวร์เชิญชวนเข้าร่วมเวิร์กช็อปศิลปะ ใช้สีสันสดและองค์ประกอบแปรงพู่กัน',
            image: 'https://via.placeholder.com/800x600?text=Brochure+12',
            category: 'brochure'
        },
        {
            id: 'brochure-13',
            title: 'Green Energy',
            artist: 'นางสาวพิมพ์ชนก พลังงาน',
            concept: 'โบรชัวร์ให้ความรู้เกี่ยวกับพลังงานสะอาด ใช้ภาพกังหันลมและโซลาร์เซลล์',
            image: 'https://via.placeholder.com/800x600?text=Brochure+13',
            category: 'brochure'
        },
        {
            id: 'brochure-14',
            title: 'Fashion Week',
            artist: 'นายสมชาย แฟชั่น',
            concept: 'โบรชัวร์โปรโมทงานแฟชั่นวีค ใช้ภาพโมเดลและโทนสีหรูหรา',
            image: 'https://via.placeholder.com/800x600?text=Brochure+14',
            category: 'brochure'
        },
        {
            id: 'brochure-15',
            title: 'Youth Camp',
            artist: 'นางสาวปาริชาติ ค่ายเยาวชน',
            concept: 'โบรชัวร์โครงการค่ายเยาวชน ใช้โทนสีสดใสและภาพกิจกรรมกลางแจ้ง',
            image: 'https://via.placeholder.com/800x600?text=Brochure+15',
            category: 'brochure'
        },
        {
            id: 'brochure-16',
            title: 'Science Fair',
            artist: 'นายณัฐพล นักวิทย์',
            concept: 'โบรชัวร์ประชาสัมพันธ์งานนิทรรศการวิทยาศาสตร์ ใช้สีสันสดใสและกราฟิกทางวิทยาศาสตร์',
            image: 'https://via.placeholder.com/800x600?text=Brochure+16',
            category: 'brochure'
        },
        {
            id: 'brochure-17',
            title: 'Film Festival',
            artist: 'นางสาวธนัญญา ภาพยนตร์',
            concept: 'โบรชัวร์โปรโมทเทศกาลภาพยนตร์ ใช้ภาพฟิล์มและโทนสีเข้มสร้างบรรยากาศ',
            image: 'https://via.placeholder.com/800x600?text=Brochure+17',
            category: 'brochure'
        },
        {
            id: 'brochure-18',
            title: 'Book Fair',
            artist: 'นายปกรณ์ นักอ่าน',
            concept: 'โบรชัวร์งานสัปดาห์หนังสือ ใช้โทนสีอบอุ่นและภาพหนังสือเรียงบนชั้น',
            image: 'https://via.placeholder.com/800x600?text=Brochure+18',
            category: 'brochure'
        },
        {
            id: 'brochure-19',
            title: 'Yoga Workshop',
            artist: 'นางสาวอริสรา สุขภาพ',
            concept: 'โบรชัวร์เชิญเข้าร่วมเวิร์กช็อปโยคะ ใช้ภาพท่าทางโยคะและโทนสีพาสเทล',
            image: 'https://via.placeholder.com/800x600?text=Brochure+19',
            category: 'brochure'
        },
        {
            id: 'brochure-20',
            title: 'Photography Exhibition',
            artist: 'นายวรพจน์ ช่างภาพ',
            concept: 'โบรชัวร์นิทรรศการภาพถ่าย ใช้ภาพถ่ายตัวอย่างและกราฟิกเรียบง่าย',
            image: 'https://via.placeholder.com/800x600?text=Brochure+20',
            category: 'brochure'
        },
        {
            id: 'brochure-21',
            title: 'Gardening Workshop',
            artist: 'นางสาวจารุวรรณ สวนสวย',
            concept: 'โบรชัวร์เวิร์กช็อปการปลูกต้นไม้ ใช้ภาพต้นไม้และดอกไม้สดใส',
            image: 'https://via.placeholder.com/800x600?text=Brochure+21',
            category: 'brochure'
        },
        {
            id: 'brochure-22',
            title: 'Culinary Class',
            artist: 'นายพีรพล เชฟ',
            concept: 'โบรชัวร์เชิญเข้าคลาสทำอาหาร ใช้ภาพอาหารน่ากินและสีสันสดใส',
            image: 'https://via.placeholder.com/800x600?text=Brochure+22',
            category: 'brochure'
        },
        {
            id: 'brochure-23',
            title: 'Charity Run',
            artist: 'นางสาววิไลรัตน์ กิจกรรม',
            concept: 'โบรชัวร์งานวิ่งการกุศล ใช้ภาพนักวิ่งและโทนสีสดชื่น',
            image: 'https://via.placeholder.com/800x600?text=Brochure+23',
            category: 'brochure'
        },
        {
            id: 'brochure-24',
            title: 'Startup Expo',
            artist: 'นายธนกร ผู้ประกอบการ',
            concept: 'โบรชัวร์งานแสดงสตาร์ทอัพ ใช้โทนสีสีน้ำเงินและกราฟิกเทคโนโลยี',
            image: 'https://via.placeholder.com/800x600?text=Brochure+24',
            category: 'brochure'
        },
        {
            id: 'brochure-25',
            title: 'Dance Festival',
            artist: 'นางสาวนฤมล นักเต้น',
            concept: 'โบรชัวร์เทศกาลการเต้น ใช้ภาพนักเต้นและโทนสีสดใสเป็นจังหวะ',
            image: 'https://via.placeholder.com/800x600?text=Brochure+25',
            category: 'brochure'
        },
        {
            id: 'brochure-26',
            title: 'Martial Arts Camp',
            artist: 'นายสมชาย ศิลปะป้องกันตัว',
            concept: 'โบรชัวร์ค่ายศิลปะการต่อสู้ ใช้ภาพนักเรียนฝึกซ้อมและโทนสีเข้ม',
            image: 'https://via.placeholder.com/800x600?text=Brochure+26',
            category: 'brochure'
        },
        {
            id: 'brochure-27',
            title: 'Environmental Forum',
            artist: 'นางสาวอรวรรณ สิ่งแวดล้อม',
            concept: 'โบรชัวร์งานสัมมนาสิ่งแวดล้อม ใช้ภาพธรรมชาติและโทนสีเขียว',
            image: 'https://via.placeholder.com/800x600?text=Brochure+27',
            category: 'brochure'
        },
        {
            id: 'brochure-28',
            title: 'Robotics Workshop',
            artist: 'นายธนวัชร์ หุ่นยนต์',
            concept: 'โบรชัวร์เวิร์กช็อปหุ่นยนต์ ใช้ภาพหุ่นยนต์และกราฟิกเทคโนโลยี',
            image: 'https://via.placeholder.com/800x600?text=Brochure+28',
            category: 'brochure'
        },
        {
            id: 'brochure-29',
            title: 'Language Camp',
            artist: 'นางสาวพิมพ์ชนก ภาษา',
            concept: 'โบรชัวร์ค่ายเรียนภาษา ใช้ภาพกิจกรรมเรียนรู้และโทนสีสดใส',
            image: 'https://via.placeholder.com/800x600?text=Brochure+29',
            category: 'brochure'
        },
        {
            id: 'brochure-30',
            title: 'Photography Workshop',
            artist: 'นายธีรพงษ์ ช่างภาพ',
            concept: 'โบรชัวร์เวิร์กช็อปถ่ายภาพ ใช้ภาพตัวอย่างถ่ายภาพและกราฟิกเรียบง่าย',
            image: 'https://via.placeholder.com/800x600?text=Brochure+30',
            category: 'brochure'
        },
        {
            id: 'brochure-31',
            title: 'Mindfulness Retreat',
            artist: 'นางสาวกมลวรรณ สมาธิ',
            concept: 'โบรชัวร์รีทรีตเพื่อสมาธิและการพักผ่อน ใช้ภาพธรรมชาติและโทนสีสงบ',
            image: 'https://via.placeholder.com/800x600?text=Brochure+31',
            category: 'brochure'
        },
        {
            id: 'brochure-32',
            title: 'Adventure Camp',
            artist: 'นายวิชาญ ผจญภัย',
            concept: 'โบรชัวร์ค่ายผจญภัย ใช้ภาพกิจกรรมกลางแจ้งและสีสันสดใส',
            image: 'https://via.placeholder.com/800x600?text=Brochure+32',
            category: 'brochure'
        },
        {
            id: 'brochure-33',
            title: 'Theater Workshop',
            artist: 'นางสาวอรอนงค์ การแสดง',
            concept: 'โบรชัวร์เวิร์กช็อปละคร ใช้ภาพนักแสดงและโทนสีสื่ออารมณ์',
            image: 'https://via.placeholder.com/800x600?text=Brochure+33',
            category: 'brochure'
        },
        {
            id: 'brochure-34',
            title: 'Astronomy Night',
            artist: 'นายอนันต์ ดาราศาสตร์',
            concept: 'โบรชัวร์งานสังเกตดวงดาว ใช้ภาพท้องฟ้าและโทนสีเข้ม',
            image: 'https://via.placeholder.com/800x600?text=Brochure+34',
            category: 'brochure'
        },
        {
            id: 'brochure-35',
            title: 'Marine Conservation',
            artist: 'นางสาวสุนิสา ทะเล',
            concept: 'โบรชัวร์งานอนุรักษ์ทะเล ใช้ภาพสัตว์ทะเลและโทนสีฟ้า-เขียว',
            image: 'https://via.placeholder.com/800x600?text=Brochure+35',
            category: 'brochure'
        },
        {
            id: 'brochure-36',
            title: 'Cultural Heritage Tour',
            artist: 'นายสมชาย มรดกไทย',
            concept: 'โบรชัวร์ท่องเที่ยวเชิงวัฒนธรรม ใช้ภาพวัดและโทนสีอบอุ่น',
            image: 'https://via.placeholder.com/800x600?text=Brochure+36',
            category: 'brochure'
        },
        {
            id: 'brochure-37',
            title: 'Coding Bootcamp',
            artist: 'นายปริญญา โปรแกรมเมอร์',
            concept: 'โบรชัวร์ค่ายเรียนเขียนโปรแกรม ใช้กราฟิกเทคโนโลยีและสีสันสดใส',
            image: 'https://via.placeholder.com/800x600?text=Brochure+37',
            category: 'brochure'
        },
        {
            id: 'brochure-38',
            title: 'Fitness Challenge',
            artist: 'นางสาวกุลธิดา สุขภาพ',
            concept: 'โบรชัวร์กิจกรรมออกกำลังกาย ใช้ภาพนักกีฬาและสีสันสดใส',
            image: 'https://via.placeholder.com/800x600?text=Brochure+38',
            category: 'brochure'
        },
        {
            id: 'brochure-39',
            title: 'Music Workshop',
            artist: 'นายณัฐวุฒิ นักดนตรี',
            concept: 'โบรชัวร์เวิร์กช็อปดนตรี ใช้ภาพเครื่องดนตรีและโทนสีสดใส',
            image: 'https://via.placeholder.com/800x600?text=Brochure+39',
            category: 'brochure'
        },
        {
            id: 'brochure-40',
            title: 'Digital Art Expo',
            artist: 'นางสาวปาริชาต ศิลป์ดิจิทัล',
            concept: 'โบรชัวร์งานแสดงศิลปะดิจิทัล ใช้ภาพงานดิจิทัลและโทนสีสว่าง',
            image: 'https://via.placeholder.com/800x600?text=Brochure+40',
            category: 'brochure'
        }
    ],
    sculpture: [
        {
            id: 'sculpture-1',
            title: 'Spirit of Siam', //best3
            groupName: 'กลุ่มศิลปินรุ่นใหม่',
            members: ['นายประยุทธ์ ปั้นดิน', 'นางสาวชุติมา แกะสลัก', 'นายวิชัย โลหะกรรม'],
            concept: 'ประติมากรรมที่สื่อถึงจิตวิญญาณและอัตลักษณ์ของความเป็นไทยในมิติใหม่ ผ่านการผสมผสานวัสดุดั้งเดิมกับเทคนิคร่วมสมัย เพื่อสะท้อนความเป็นไทยที่ก้าวทันยุคสมัย',
            image: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'sculpture'
        },
        {
            id: 'sculpture-2',
            title: 'Modern Buddha',
            groupName: 'ชุมชนศิลปกรรม',
            members: ['นายสมศักดิ์ จิตใส', 'นางสาวภัทรา บุญเลิศ'],
            concept: 'การตีความพระพุทธรูปในแบบร่วมสมัย โดยยังคงความศักดิ์สิทธิ์และความเป็นไทย แต่นำเสนอผ่านรูปแบบและวัสดุที่เข้ากับยุคสมัยปัจจุบัน',
            image: 'https://images.unsplash.com/photo-1569701280402-dd2e7b9eeba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'sculpture'
        },
        {
            id: 'sculpture-3',
            title: 'Unity in Diversity',
            groupName: 'กลุ่มศิลปกรรมร่วมสมัย',
            members: ['นายสมพงษ์ ร่วมใจ', 'นางสาวอรุณี สามัคคี', 'นายมานิตย์ หลากหลาย'],
            concept: 'ประติมากรรมที่แสดงถึงความหลากหลายทางวัฒนธรรมในสังคมไทย และการอยู่ร่วมกันอย่างสามัคคี ผ่านการใช้วัสดุที่หลากหลายมาประกอบเป็นชิ้นงานเดียว',
            image: 'https://images.unsplash.com/photo-1594736797933-d0c6eb5523b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
            category: 'sculpture'
        }
    ]
};

// Featured artworks for carousel (5 highlighted artworks)
const featuredArtworks = [
    galleryData.cubism[0],
    galleryData.popart[0],
    galleryData.sculpture[0],
    galleryData.brochure[0],
    galleryData.popup[0]
];

// Global variables for carousel functionality
let currentSlide = 0;
let carouselInterval;
let currentFilter = 'all';

// Mobile menu toggle function
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('show');
    }
}

// Carousel functions
function initializeCarousel() {
    const carousel = document.getElementById('carousel');
    const dots = document.getElementById('carouselDots');
    
    if (!carousel || !dots) return;
    
    // Clear existing content
    carousel.innerHTML = '';
    dots.innerHTML = '';
    
    // Create slides
    featuredArtworks.forEach((artwork, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <div class="carousel-overlay"></div>
            <img src="${artwork.image}" alt="${artwork.title}" loading="${index === 0 ? 'eager' : 'lazy'}">
            <div class="carousel-content">
                <div class="container">
                    <div class="carousel-text">
                        <h2 class="carousel-title" data-testid="text-carousel-title-${index}">${artwork.title}</h2>
                        <p class="carousel-artist" data-testid="text-carousel-artist-${index}">
                            ${artwork.artist || `กลุ่ม: ${artwork.groupName}`}
                        </p>
                        <p class="carousel-concept" data-testid="text-carousel-concept-${index}">${artwork.concept}</p>
                        <a href="artwork.html?category=${artwork.category}&id=${artwork.id}" 
                           class="carousel-button" data-testid="button-carousel-detail-${index}">
                            <span>ดูรายละเอียด</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        carousel.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-testid', `button-carousel-dot-${index}`);
        dot.onclick = () => goToSlide(index);
        dots.appendChild(dot);
    });
    
    startAutoSlide();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (!slides.length || !dots.length) return;
    
    // Remove active class from current slide and dot
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Set new current slide
    currentSlide = index;
    
    // Add active class to new slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide((currentSlide + 1) % featuredArtworks.length);
}

function prevSlide() {
    goToSlide(currentSlide === 0 ? featuredArtworks.length - 1 : currentSlide - 1);
}

function startAutoSlide() {
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 3000); // Change slide every 3 seconds
}

// Gallery functions
function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    let artworksToShow = [];
    
    if (currentFilter === 'all') {
        // Show all artworks from all categories
        Object.values(galleryData).forEach(category => {
            artworksToShow.push(...category);
        });
    } else {
        // Show only artworks from selected category
        artworksToShow = galleryData[currentFilter] || [];
    }
    
    artworksToShow.forEach(artwork => {
        const card = document.createElement('div');
        card.className = 'gallery-card fade-in';
        card.setAttribute('data-testid', `card-${artwork.category}-${artwork.id}`);
        card.innerHTML = `
            <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
            <div class="gallery-card-content">
                <h3 data-testid="text-card-title-${artwork.id}">${artwork.title}</h3>
                <p data-testid="text-card-artist-${artwork.id}">
                    ${artwork.artist || `กลุ่ม: ${artwork.groupName}`}
                </p>
                <a href="artwork.html?category=${artwork.category}&id=${artwork.id}" 
                   class="gallery-card-button" data-testid="button-card-detail-${artwork.id}">
                    ดูรายละเอียด
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
    
    // Show message if no artworks found
    if (artworksToShow.length === 0) {
        grid.innerHTML = `
            <div class="no-results" data-testid="text-no-results">
                <p>ไม่พบผลงานในหมวดหมู่นี้</p>
            </div>
        `;
    }
}

function filterArtworks(category) {
    currentFilter = category;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find and activate the clicked button
    event.target.classList.add('active');
    
    renderGallery();
}

// Render featured artworks for home page
function renderFeaturedArtworks() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    // Show first 3 featured artworks
    featuredArtworks.slice(0, 3).forEach((artwork, index) => {
        const card = document.createElement('div');
        card.className = 'gallery-card fade-in';
        card.setAttribute('data-testid', `featured-card-${index}`);
        card.innerHTML = `
            <img src="${artwork.image}" alt="${artwork.title}" loading="lazy">
            <div class="gallery-card-content">
                <h3 data-testid="text-featured-title-${index}">${artwork.title}</h3>
                <p data-testid="text-featured-artist-${index}">
                    ${artwork.artist || `กลุ่ม: ${artwork.groupName}`}
                </p>
                <a href="artwork.html?category=${artwork.category}&id=${artwork.id}" 
                   class="gallery-card-button" data-testid="button-featured-detail-${index}">
                    ดูรายละเอียด
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Artwork detail functions
function renderArtworkDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const artworkId = urlParams.get('id');
    
    if (!category || !artworkId) {
        // Redirect to gallery if no valid parameters
        window.location.href = 'gallery.html';
        return;
    }
    
    const artwork = galleryData[category]?.find(item => item.id === artworkId);
    
    if (!artwork) {
        // Redirect to gallery if artwork not found
        window.location.href = 'gallery.html';
        return;
    }
    
    const detailContainer = document.getElementById('artworkDetail');
    if (!detailContainer) return;
    
    const isSculpture = category === 'sculpture';
    
    // Update page title and meta description
    document.getElementById('artworkTitle').textContent = `${artwork.title} - นิทรรศการศิลปะออนไลน์`;
    document.getElementById('artworkDescription').setAttribute('content', 
        `ชมผลงาน ${artwork.title} โดย ${artwork.artist || artwork.groupName} พร้อมรายละเอียดแนวคิดและการสร้างสรรค์`);
    
    detailContainer.innerHTML = `
        <div>
            <img src="${artwork.image}" alt="${artwork.title}" class="artwork-image" data-testid="img-artwork-main">
        </div>
        <div class="artwork-info">
            <div>
                <h1 class="artwork-title" data-testid="text-artwork-title">${artwork.title}</h1>
                ${isSculpture ? `
                    <p class="artwork-artist" data-testid="text-artwork-group">กลุ่ม: ${artwork.groupName}</p>
                    <div class="artwork-members" data-testid="list-artwork-members">
                        <h3>สมาชิกในกลุ่ม:</h3>
                        <ul>
                            ${artwork.members.map((member, index) => `<li data-testid="text-member-${index}">${member}</li>`).join('')}
                        </ul>
                    </div>
                ` : `
                    <p class="artwork-artist" data-testid="text-artwork-artist">ศิลปิน: ${artwork.artist}</p>
                `}
            </div>
            
            <div class="artwork-concept-card">
                <h3>แนวคิด</h3>
                <p data-testid="text-artwork-concept">${artwork.concept}</p>
            </div>
            
            <div>
                <span class="artwork-category" data-testid="text-artwork-category">
                    ${getCategoryDisplayName(category)}
                </span>
            </div>
        </div>
    `;
}

function getCategoryDisplayName(category) {
    const names = {
        cubism: 'Cubism Art',
        popup: 'Pop Up',
        popart: 'Pop Art',
        brochure: 'Brochure',
        sculpture: 'Sculpture'
    };
    return names[category] || category;
}

// Initialize the application based on current page
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch (currentPage) {
        case 'index.html':
        case '':
            // Home page initialization
            initializeCarousel();
            renderFeaturedArtworks();
            break;
        case 'gallery.html':
            // Gallery page initialization
            renderGallery();
            break;
        case 'artwork.html':
            // Artwork detail page initialization
            renderArtworkDetail();
            break;
        case 'about.html':
            // About page - no special initialization needed
            break;
        default:
            // Fallback for unknown pages - try homepage initialization
            initializeCarousel();
            renderFeaturedArtworks();
            break;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
});

// Handle window resize for responsive behavior
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu) {
            mobileMenu.classList.remove('show');
        }
    }
});

// Pause carousel when user hovers over it (accessibility)
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });
        
        carousel.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }
});

// Global functions for HTML onclick handlers
window.toggleMobileMenu = toggleMobileMenu;
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.filterArtworks = filterArtworks;

// Error handling for images
document.addEventListener('DOMContentLoaded', () => {
    // Add error handlers for all images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.backgroundColor = 'var(--muted)';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.innerHTML = '<i class="fas fa-image" style="color: var(--muted-foreground); font-size: 2rem;"></i>';
        });
    });
});
