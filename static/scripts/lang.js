function r(text, reading)
{
    return ctx => !ctx.named("reading") ? text : reading;
}

export const messages =
{
    ja:
    {
        default_user_name: "名無しさん",
        message_colon: "：",
        ui:
        {
            title: "ギコっぽいっぽい",
            subtitle: "非公式リメイク",
            
            login_user_count: "人数：",
            login_streamer_count: "配信者：",
            
            infobox_label_area: "ｴﾘｱ：",
            infobox_value_area: "海辺の町",
            infobox_label_room: "ｽﾃｰｼﾞ：",
            infobox_label_user_name: "名前：",
            infobox_label_user_count: "人数：",
            
            label_username: "ユーザー名：",
            label_stream: "ﾁｬﾝﾈﾙ{index}：",
            label_input: "入力：",
            label_log: "ログ：",

            button_switch_language: "English",
            button_send: "発言",
            button_stream_start: "配信開始",
            button_stream_stop: "配信停止",
            button_stream_take: "受信",
            button_stream_drop: "受信停止",
            button_rula: "#ﾙｰﾗ",
            button_crisp: "低画質っぽい",
            volume: "音量：",
            sound_effect: "効果音",
            user_name_bg: "ｺﾃ背景",
            label_move: "移動",
            label_bubble: "吹き出し",
            
            popup_button_ok: "OK",
            popup_button_cancel: "キャンセル",
            
            warning_toast_title: "警告",
            
            rula_menu_title: "ステージ情報",
            rula_menu_column_room_name: "ステージ名",
            rula_menu_column_user_count: "人数",
            rula_menu_column_streamers: "配信者",
            rula_menu_button_rula: "ルーラ",
            
            stream_form_title: "配信設定",
            stream_form_mode: "モード：",
            stream_form_video_sound_mode: "動画＋音声",
            stream_form_sound_only_mode: "音声のみ",
            stream_form_video_only_mode: "動画のみ",
            stream_form_show_advanced: "高度な設定を表示",
            stream_form_hide_advanced: "高度な設定を非表示",
            stream_form_echo_cancellation: "エコーキャンセリング",
            stream_form_noise_suppression: "ノイズリダクション",
            stream_form_auto_gain: "自動利得制御",
            stream_form_button_stream: "配信開始",
            stream_form_screen_capture: "画面共有",
        },
        msg:
        {
            connection_lost: "再接続中",
            room_unavailable: "まだ部屋の用意ができていません。ごめんね！",
            page_refresh_required: "このサイトは更新されましたからページをリフレッシュしてください。",
            
            error_obtaining_media_device: "デバイスを取得できませんでした。",
            no_webrtc: "あなたのブラウザーはWebRTCをサポートしていません。",
            
            unknown_error: "不明なエラーが原因で接続に失敗しました。",
            invalid_username: "指定されたユーザー名は無効です。",
            ip_restricted: "すでにこのIPアドレスで2回ログインしています。",
        },
        room:
        {
            jinja: r("神社", "じんじゃ"),
            jinja_st: r("神社入り口", "じんじゃはいりぐち"),
            long_st: r("鰻道", "うなみち"),
            school_ground: r("学校 校庭", "がっこう こうてい"),
            bar774: r("地下街 バー774", "ちかがい バー774"),
            izakaya774: r("地下街 居酒屋 名無し", "ちかがい いざかや ななし"),
            basement: r("地下街", "ちかがい"),
            bar: "バー",
            school_st: r("学校通り", "がっこうどおり"),
            bar_st: r("バー通り", "バーどおり"),
            admin_st: r("開発局通り", "かいはつきょくどおり"),
            cafe_st: r("カフェ通り", "カフェどおり"),
            busstop: r("バス停", "バスてい"),
            idoA: r("井戸Ａ", "いどＡ"),
            idoB: r("井戸Ｂ", "いどＢ"),
            school: r("学校 教室", "がっこう きょうしつ"),
            admin: r("開発局", "かいはつきょく"),
            seashore: r("海岸", "かいがん"),
            admin_bar: r("秘密のバー", "ひみつのバー"),
            radio: r("ラヂヲ局", "ラヂヲきょく"),
            radio_room1: r("ラヂヲ局 第1スタジオ", "ラヂヲきょく だい1スタジオ"),
            yatai: r("屋台", "やたい"),
            kaidan: r("高台の階段", "たかだいのかいだん"),
            takadai: r("高台", "たかだい"),
            yoshinoya: r("吉野家", "よしのや"),
            radio_gakuya: r("ラヂヲ局 楽屋", "ラヂヲきょく がくや"),
            radio_backstage: r("ラヂヲ局 舞台裏", "ラヂヲきょく ぶたいうら"),
            radio_room2: r("ラヂヲ局 第2スタジオ BEAT GIKO", "ラヂヲきょく だい2スタジオ BEAT GIKO"),
            radio_room3: r("ラヂヲ局 第3スタジオ G-SQUID", "ラヂヲきょく だい2スタジオ G-SQUID"),
            school_rouka: r("学校 廊下", "がっこう ろうか"),
            school_international: r("学校 国際科教室", "がっこう こくさいかきょうしつ"),
            school_pc: r("学校 パソコンルーム", "がっこう パソコンルーム"),
            enkai: r("宴会場", "えんかいじょう"),
            silo: "サイロ",
            badend: r("転落死しました！", "てんらくししました！"),
            bar_giko: r("ＢＡＲギコ", "バーギコ"),
            bar_giko2: r("ＢＡＲギコ 下階", "バーギコ かかい"),
            bar_giko_square: r("噴水広場", "ふんすいひろば"),
        }
    },
    en:
    {
        default_user_name: "Anonymous",
        message_colon: ": ",
        ui:
        {
            title: "Gikopoipoi",
            subtitle: "Unofficial remake",
            
            login_user_count: "Users: ",
            login_streamer_count: "Streamers: ",
            
            infobox_label_area: "Area:",
            infobox_value_area: "Sea City",
            infobox_label_room: "Stage:",
            infobox_label_user_name: "Name:",
            infobox_label_user_count: "Users:",
            
            label_username: "User name:",
            label_stream: "Channel {index}: ",
            label_input: "Input:",
            label_log: "Log:",

            button_switch_language: "日本語",
            button_send: "Send",
            button_stream_start: "Start stream",
            button_stream_stop: "Stop stream",
            button_stream_take: "Get stream",
            button_stream_drop: "Drop stream",
            button_rula: "#rula",
            button_crisp: "\"Low Quality\"",
            volume: "Volume: ",
            sound_effect: "Vol.",
            user_name_bg: "Name BG",
            label_move: "Move",
            label_bubble: "Bubble",
            
            popup_button_ok: "OK",
            popup_button_cancel: "Cancel",
            
            warning_toast_title: "Warning",
            
            rula_menu_title: "Stage Info",
            rula_menu_column_room_name: "Stage Name",
            rula_menu_column_user_count: "Users",
            rula_menu_column_streamers: "Streamers",
            rula_menu_button_rula: "Rula",
            
            stream_form_title: "Stream Settings",
            stream_form_mode: "Mode:",
            stream_form_video_sound_mode: "Video + Voice",
            stream_form_sound_only_mode: "Voice only",
            stream_form_video_only_mode: "Video only",
            stream_form_show_advanced: "Show Advanced Settings",
            stream_form_hide_advanced: "Hide Advanced Settings",
            stream_form_echo_cancellation: "Echo cancellation",
            stream_form_noise_suppression: "Noise Reduction",
            stream_form_auto_gain: "Auto Gain Control",
            stream_form_button_stream: "Start Streaming",
            stream_form_screen_capture: "Screen capture",
        },
        msg:
        {
            connection_lost: "Reconnecting...",
            room_unavailable: "This room is not available yet. Sorry!",
            page_refresh_required: "An update is ready, so please refresh this page.",
            
            error_obtaining_media_device: "Unable to obtain media device.",
            no_webrtc: "Sorry, your browser doesn't support WebRTC.",
            
            unknown_error: "The connection failed due to an unknown error.",
            invalid_username: "The provided username is invalid.",
            ip_restricted: "You are already logged in twice with this IP address.",
        },
        room:
        {
            long_st: "Eel Track",
            jinja: "Shrine",
            jinja_st: "Shrine Entrance",
            school_ground: "School: Schoolyard",
            bar774: "Underground Town: Bar 774",
            izakaya774: "Underground Town: Drunker's Bar",
            basement: "Underground Town",
            bar: "Bar",
            school_st: "School Crossing",
            bar_st: "Bar Street",
            admin_st: "Kanrinin Street",
            admin: "Developer's Lounge",
            admin_bar: "Admin's Bar",
            cafe_st: "Cafe Vista",
            enkai: "Banqueting Hall",
            idoA: "Well A",
            idoB: "Well B",
            busstop: "Bus Stop",
            school: "School: Classroom",
            school_rouka: "School: Hallway",
            school_international: "School: Cultural Room",
            school_pc: "School Computer Lab",
            seashore: "Seashore",
            radio: "Radio Studio",
            radio_room1: "Radio Studio 1",
            radio_room2: "Radio Studio 2: BEAT GIKO",
            radio_room3: "Radio Studio 3: G-SQUID",
            radio_gakuya: "Radio Studio: Dressing Room",
            radio_backstage: "Radio Studio: Greenroom",
            yatai: "Sushi Vendor",
            kaidan: "Hilltop Stairway",
            takadai: "Hilltop",
            yoshinoya: "Yoshinoya",
            silo: "Silo",
            badend: "You fell to your death!",
            bar_giko: "Bar Giko",
            bar_giko2: "Bar Giko Lower Floor",
            bar_giko_square: "Fountain Plaza"
        }
    }
}