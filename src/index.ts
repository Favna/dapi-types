/* eslint-disable no-bitwise */

// #region API Payloads
// (prefixed with API, suffix is Data for full payloads or Partial)

// #region Activity

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object
 */
export interface APIActivityData {
	name: string;
	type: ActivityType;
	url?: string | null;
	created_at: number;
	timestamps?: APIActivityDataTimestamp;
	application_id?: string;
	details?: string | null;
	state?: string | null;
	emoji?: APIActivityDataEmoji | null;
	party?: APIActivityDataParty;
	assets?: APIActivityDataAssets;
	secrets?: APIActivityDataSecrets;
	instance?: boolean;
	flags?: ActivityFlags;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps
 */
export interface APIActivityDataTimestamp {
	start?: number;
	end?: number;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-emoji
 */
export interface APIActivityDataEmoji {
	name: string;
	id?: string;
	animated?: boolean;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-party
 */
export interface APIActivityDataParty {
	id?: string;
	size?: [number, number];
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets
 */
export interface APIActivityDataAssets {
	large_image?: string;
	large_text?: string;
	small_image?: string;
	small_text?: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets
 */
export interface APIActivityDataSecrets {
	join?: string;
	spectate?: string;
	match?: string;
}

// #endregion Activity

// #region Audit Logs

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-object
 */
export interface APIAuditLogData {
	webhooks: APIWebhookData[];
	users: APIUserData[];
	audit_log_entries: APIAuditLogEntryData[];
	integrations: Partial<APIIntegrationData>[];
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object
 */
export interface APIAuditLogEntryData {
	target_id: string | null;
	changes?: APIAuditLogChangeData[];
	user_id: string;
	id: string;
	action_type: AuditLogEvent;
	options?: APIAuditLogOptionsData;
	reason?: string;
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure
 */
export interface APIAuditLogChangeData {
	new_value?: unknown;
	old_value?: unknown;
	key: string;
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info
 */
export interface APIAuditLogOptionsData {
	delete_member_days?: string;
	members_removed?: string;
	channel_id?: string;
	message_id?: string;
	count?: string;
	id?: string;
	type?: 'member' | 'role';
	role_name?: string;
}

// #endregion Audit Logs

// #region Bans

/**
 * https://discord.com/developers/docs/resources/guild#ban-object-ban-structure
 */
export interface APIBanData {
	reason: string | null;
	user: APIUserData;
}

// #endregion Bans

// #region Channels

/**
 * Not Documented, but partial only includes id, name, and type
 */
export interface APIChannelPartial {
	id: string;
	type: ChannelType;
	name?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object
 */
export interface APIChannelData extends APIChannelPartial {
	guild_id?: string;
	position?: number;
	permission_overwrites?: APIOverwriteData[];
	topic?: string | null;
	nsfw?: boolean;
	last_message_id?: string | null;
	bitrate?: number;
	user_limit?: number;
	rate_limit_per_user?: number;
	recipients?: APIUserData[];
	icon?: string | null;
	owner_id?: string;
	application_id?: string;
	parent_id?: string | null;
	last_pin_timestamp?: string;
}

// #endregion Channels

// #region Connections

/**
 * https://discord.com/developers/docs/resources/user#connection-object-connection-structure
 */
export interface APIConnectionData {
	id: string;
	name: string;
	type: string;
	revoked?: boolean;
	integrations?: APIIntegrationData[];
	verified: boolean;
	friend_sync: boolean;
	show_activity: boolean;
	visibility: ConnectionVisibility;
}

// #endregion Connections

// #region Embeds

/**
 * https://discord.com/developers/docs/resources/channel#embed-object
 */
export interface APIEmbedData {
	title?: string;
	type?: EmbedType;
	description?: string;
	url?: string;
	timestamp?: string;
	color?: number;
	footer?: APIEmbedFooterData;
	image?: APIEmbedImageData;
	thumbnail?: APIEmbedThumbnailData;
	video?: APIEmbedVideoData;
	provider?: APIEmbedProviderData;
	author?: APIEmbedAuthorData;
	fields?: APIEmbedFieldData[];
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure
 */
export interface APIEmbedFooterData {
	text: string;
	icon_url?: string;
	proxy_icon_url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure
 */
export interface APIEmbedImageData {
	url?: string;
	proxy_url?: string;
	height?: number;
	width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure
 */
export interface APIEmbedThumbnailData {
	url?: string;
	proxy_url?: string;
	height?: number;
	width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure
 */
export interface APIEmbedVideoData {
	url?: string;
	height?: number;
	width?: number;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure
 */
export interface APIEmbedProviderData {
	name?: string;
	url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure
 */
export interface APIEmbedAuthorData {
	name?: string;
	url?: string;
	icon_url?: string;
	proxy_icon_url?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure
 */
export interface APIEmbedFieldData {
	name: string;
	value: string;
	inline?: boolean;
}

// #endregion Embeds

// #region Emojis

/**
 * Not Documented, but partial doesn't include roles, users, require_colons, or managed
 */
export interface APIEmojiPartial {
	id: string | null;
	name: string | null;
	animated?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface APIEmojiData extends APIEmojiPartial {
	roles?: string[];
	user?: APIUserData;
	require_colons?: boolean;
	managed?: boolean;
	available?: boolean;
}

// #endregion Emojis

// #region Guilds

export interface APIGuildUnavailable {
	id: string;
	unavailable: boolean;
}

/**
 * Not Documented, but partial only includes id, name, icon, and splash
 */
export interface APIGuildPartial {
	id: string;
	name: string;
	icon: string | null;
	splash: string | null;
	unavailable?: boolean;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 */
export interface APIGuildData extends APIGuildPartial {
	discovery_splash: string | null;
	owner?: boolean;
	owner_id: string;
	permissions?: number;
	region: string;
	afk_channel_id: string | null;
	afk_timeout: number;
	embed_enabled?: boolean;
	embed_channel_id?: string;
	verification_level: GuildVerificationLevel;
	default_message_notifications: GuildDefaultMessageNotifications;
	explicit_content_filter: GuildExplicitContentFilterLevel;
	roles: APIRoleData[];
	emojis: APIEmojiData[];
	features: GuildFeatures[];
	mfa_level: GuildMFALevel;
	application_id: string | null;
	widget_enabled?: boolean;
	widget_channel_id?: string;
	system_channel_id: string | null;
	system_channel_flags: GuildSystemChannelFlags;
	rules_channel_id: string | null;
	joined_at?: string;
	large?: boolean;
	unavailable?: boolean;
	member_count?: number;
	voice_states?: APIVoiceStatePartial[];
	members?: APIGuildMemberData[];
	channels?: APIChannelData[];
	presences?: APIPresenceUpdateData[];
	max_presences?: number | null;
	max_members?: number;
	vanity_url_code: string | null;
	description: string | null;
	banner: string | null;
	premium_tier: GuildPremiumTier;
	premium_subscription_count?: number;
	preferred_locale: string;
	public_updates_channel_id: string | null;
	approximate_member_count?: number;
	approximate_presence_status?: number;
	max_video_channel_users?: number;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-widget-object
 */
export interface APIGuildWidgetData {
	enabled: boolean;
	channel_id: string | null;
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-preview-object
 */
export interface APIGuildPreviewData extends Omit<APIGuildUnavailable, 'unavailable'> {
	discovery_splash: string | null;
	emojis: APIEmojiData[];
	features: GuildFeatures[];
	approximate_member_count: number;
	approximate_presence_count: number;
	description: string | null;
}

/**
 * The vanity URL data.
 * @see https://discord.com/developers/docs/resources/guild#get-guild-vanity-url-example-partial-invite-object
 */
export interface APIGuildVanityData {
	/**
	 * The code of this invite.
	 * @example "discord"
	 */
	code: string;

	/**
	 * The amount of uses this invite has.
	 * @example 42
	 */
	uses: number;
}

// #endregion Guilds

// #region Integrations

/**
 * https://discord.com/developers/docs/resources/guild#integration-object-integration-structure
 */
export interface APIIntegrationData {
	id: string;
	name: string;
	type: string;
	enabled: boolean;
	syncing: boolean;
	role_id: string;
	enable_emoticons?: boolean;
	expire_behavior: IntegrationExpireBehavior;
	expire_grace_period: number;
	user: APIUserData;
	account: APIIntegrationAccountData;
	synced_at: string;
}

/**
 * https://discord.com/developers/docs/resources/guild#integration-account-object
 */
export interface APIIntegrationAccountData {
	id: string;
	name: string;
}

// #endregion Integrations

// #region Invites

/**
 * https://discord.com/developers/docs/resources/invite#invite-object-invite-structure
 */
export interface APIInviteData {
	code: string;
	guild?: APIGuildPartial;
	channel: APIChannelPartial;
	inviter?: APIUserData;
	target_user?: APIUserData;
	target_user_type?: InviteTargetUserType;
	approximate_presence_count?: number;
	approximate_member_count?: number;
}

/**
 * https://discord.com/developers/docs/resources/invite#invite-metadata-object-invite-metadata-structure
 */
export interface APIInviteMetadataData {
	uses: number;
	max_uses: number;
	max_age: number;
	temporary: boolean;
	created_at: string;
}

// #endregion Invites

// #region Members

/**
 * https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure
 */
export interface APIGuildMemberData {
	user?: APIUserData;
	nick: string | null;
	roles: string[];
	joined_at: string;
	premium_since?: string | null;
	deaf: boolean;
	mute: boolean;
}

// #endregion Members

// #region Messages

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-structure
 */
export interface APIMessageData {
	id: string;
	channel_id: string;
	guild_id?: string;
	author: APIUserData;
	member?: APIGuildMemberData;
	content: string;
	timestamp: string;
	edited_timestamp: string | null;
	tts: boolean;
	mention_everyone: boolean;
	mentions: APIMessageMentionData[];
	mention_roles: string[];
	mention_channels: APIMessageMentionChannelData[];
	attachments: APIMessageAttachmentData[];
	embeds: APIEmbedData[];
	reactions?: APIReactionData[];
	nonce?: string | null;
	pinned: boolean;
	webhook_id?: string;
	type: MessageType;
	activity?: APIMessageActivityData;
	application?: APIMessageApplicationData;
	message_reference?: APIMessageReferenceData;
	flags?: APIMessageFlags;
}

/**
 * https://discord.com/developers/docs/resources/channel#attachment-object
 */
export interface APIMessageAttachmentData {
	id: string;
	filename: string;
	size: number;
	url: string;
	proxy_url: string;
	height: number | null;
	width: number | null;
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure
 */
export interface APIMessageActivityData {
	type: MessageActivityType;
	party_id?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-application-structure
 */
export interface APIMessageApplicationData {
	id: string;
	cover_image?: string;
	description: string;
	icon: string | null;
	name: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-reference-structure
 */
export interface APIMessageReferenceData {
	message_id?: string;
	channel_id: string;
	guild_id?: string;
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-mention-object
 */
export interface APIMessageMentionChannelData {
	id: string;
	guild_id: string;
	type: ChannelType;
	name: string;
}

// #endregion Messages

// #region PermissionOverwrites

/**
 * https://discord.com/developers/docs/resources/channel#overwrite-object
 */
export interface APIOverwriteData {
	id: string;
	type: 'role' | 'member';
	allow: number;
	deny: number;
}

// #endregion PermissionOverwrites

// #region Presence

/**
 * https://discord.com/developers/docs/topics/gateway#presence-update
 *
 * The user object within this event can be partial, the only field which must be sent is the **id** field, everything else is optional.
 *
 * Along with this limitation, no fields are required, and the types of the fields are not validated.
 */
export interface APIPresenceUpdateData {
	user: { id: string } & Partial<APIUserData>;
	roles?: string[];
	game?: APIActivityData | null;
	guild_id?: string;
	status?: PresenceUpdateStatus;
	activities?: APIActivityData[];
	client_status?: APIClientStatusData;
	premium_since?: string | null;
	nick?: string | null;
}

/**
 * https://discord.com/developers/docs/topics/gateway#client-status-object
 */
export type APIClientStatusData = Partial<Record<'desktop' | 'mobile' | 'web', PresenceUpdateStatus>>

// #endregion Presence

// #region Reactions

/**
 * https://discord.com/developers/docs/resources/channel#reaction-object
 */
export interface APIReactionData {
	count: number;
	me: boolean;
	emoji: APIEmojiPartial;
}

// #endregion Reactions

// #region Roles

/**
 * https://discord.com/developers/docs/topics/permissions#role-object
 */
export interface APIRoleData {
	id: string;
	name: string;
	color: number;
	hoist: boolean;
	position: number;
	permissions: number;
	managed: boolean;
	mentionable: boolean;
}

// #endregion Roles

// #region Users

/**
 * https://discord.com/developers/docs/resources/user#user-object
 */
export interface APIUserData {
	id: string;
	username: string;
	discriminator: string;
	avatar: string | null;
	bot?: boolean;
	system?: boolean;
	mfa_enabled?: boolean;
	locale?: string;
	verified?: boolean;
	email?: string | null;
	flags?: APIUserFlags;
	premium_type?: PremiumType;
	public_flags?: APIUserFlags;
}

// #endregion Users

// #region Voice

/**
 * Not Documented, but partial doesn't include guild_id or member
 */
export interface APIVoiceStatePartial {
	channel_id: string | null;
	user_id: string;
	session_id: string;
	deaf: boolean;
	mute: boolean;
	self_deaf: boolean;
	self_mute: boolean;
	self_stream?: boolean;
	self_video: boolean;
	suppress: boolean;
}

/**
 * https://discord.com/developers/docs/resources/voice#voice-state-object
 */
export interface APIVoiceStateData extends APIVoiceStatePartial {
	guild_id?: string;
	member?: APIGuildMemberData;
}

/**
 * https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure
 */
export interface APIVoiceRegionData {
	id: string;
	name: string;
	vip: boolean;
	optional: boolean;
	deprecated: boolean;
	custom: boolean;
}

// #endregion Voice

// #region Webhooks

/**
 * https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure
 */
export interface APIWebhookData {
	id: string;
	type: WebhookType;
	guild_id?: string;
	channel_id: string;
	user?: APIUserData;
	name: string | null;
	avatar: string | null;
	token?: string;
}

// #endregion Webhooks

// #region Gateway

/**
 * https://discord.com/developers/docs/topics/gateway#get-gateway
 */
export interface APIGatewayData {
	url: string;
}

/**
 * https://discord.com/developers/docs/topics/gateway#get-gateway-bot
 */
export interface APIGatewayBotData extends APIGatewayData {
	shards: number;
	session_start_limit: APISessionStartLimit;
}

export interface APISessionStartLimit {
	total: number;
	remaining: number;
	reset_after: number;
}

// #endregion Gateway

// #region Oauth and Teams

/**
 * https://discord.com/developers/docs/topics/oauth2#get-current-application-information-response-structure
 */
export interface APIOauthData {
	id: string;
	name: string;
	icon?: string;
	description: string;
	rpc_origins?: string[];
	bot_public: boolean;
	bot_require_code_grant: boolean;
	owner: APIUserData;
	summary: string;
	verify_key: string;
	team?: APITeamData;
	guild_id?: string;
	primary_sku_id?: string;
	slug?: string;
	cover_image?: string;
}

/**
 * https://discord.com/developers/docs/topics/teams#data-models-team-object
 */
export interface APITeamData {
	icon?: string;
	id: string;
	members: APITeamMember[];
	owner_user_id: string;
}

/**
 * https://discord.com/developers/docs/topics/teams#data-models-team-members-object
 */
export interface APITeamMember {
	membership_state: TeamMembershipState;
	permissions: string[];
	team_id: string;
	user: APIUserData;
}

// #endregion

// #region Channel Following

export interface APIChannelFollowResult {
	channel_id: string;
	webhook_id: string;
}

// #endregion

// #endregion API Payloads

// #region Enums

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags
 */
export const enum ActivityFlags {
	Instance = 1 << 0,
	Join = 1 << 1,
	Spectate = 1 << 2,
	JoinRequest = 1 << 3,
	Sync = 1 << 4,
	Play = 1 << 5
}

/**
 * https://discord.com/developers/docs/resources/user#connection-object-visibility-types
 */
export const enum ConnectionVisibility {
	None,
	Everyone
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-types
 */
export const enum MessageType {
	Default,
	RecipientAdd,
	RecipientRemove,
	Call,
	ChannelNameChange,
	ChannelIconChange,
	ChannelPinnedMessage,
	GuildMemberJoin,
	UserPremiumGuildSubscription,
	UserPremiumGuildSubscriptionTier1,
	UserPremiumGuildSubscriptionTier2,
	UserPremiumGuildSubscriptionTier3,
	ChannelFollowAdd,
	__UNUSED_TYPE__,
	GuildDiscoveryDisqualified,
	GuildDiscoveryRequalified
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-activity-types
 */
export const enum MessageActivityType {
	Join = 1,
	Spectate,
	Listen,
	JoinRequest
}

/**
 * https://discord.com/developers/docs/resources/channel#message-object-message-flags
 */
export const enum APIMessageFlags {
	Crossposted = 1 << 0,
	IsCrosspost = 1 << 1,
	SuppressEmbeds = 1 << 2,
	SourceMessageDeleted = 1 << 3,
	Urgent = 1 << 4
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
 */
export const enum GuildDefaultMessageNotifications {
	AllMessages,
	OnlyMentions
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
 */
export const enum GuildExplicitContentFilterLevel {
	Disabled,
	MembersWithoutRoles,
	AllMembers
}

export const enum GuildFeatures {
	InviteSplash = 'INVITE_SPLASH',
	VipRegion = 'VIP_REGIONS',
	VanityUrl = 'VANITY_URL',
	Verified = 'VERIFIED',
	Partnered = 'PARTNERED',
	Public = 'PUBLIC',
	Commerce = 'COMMERCE',
	News = 'NEWS',
	Discoverable = 'DISCOVERABLE',
	Featurable = 'FEATURABLE',
	AnimatedIcon = 'ANIMATED_ICON',
	Banner = 'BANNER',
	PublicDisabled = 'PUBLIC_DISABLED',
	WelcomeScreenEnabled = 'WELCOME_SCREEN_ENABLED'
}
/**
 * https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
 */
export const enum GuildMFALevel {
	None,
	Elevated
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-verification-level
 */
export const enum GuildVerificationLevel {
	None,
	Low,
	Medium,
	High,
	VeryHigh
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
 */
export const enum GuildSystemChannelFlags {
	SuppressJoinNotifications = 1 << 0,
	SuppressPremiumSubscriptions = 1 << 1
}

/**
 * https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
 */
export const enum GuildPremiumTier {
	None,
	Tier1,
	Tier2,
	Tier3
}

/**
 * https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export const enum ChannelType {
	GuildText,
	DM,
	GuildVoice,
	GroupDM,
	GuildCategory,
	GuildNews,
	GuildStore,
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-types
 */
export const enum PresenceUpdateStatus {
	Idle = 'idle',
	DnD = 'dnd',
	Online = 'online',
	Offline = 'offline'
}

/**
 * https://discord.com/developers/docs/topics/gateway#activity-object-activity-types
 */
export const enum ActivityType {
	Game,
	Streaming,
	Listening,
	CustomStatus = 4
}

/**
 * https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events
 */
export const enum AuditLogEvent {
	GuildUpdate = 1,
	ChannelCreate = 10,
	ChannelUpdate = 11,
	ChannelDelete = 12,
	ChannelOverwriteCreate = 13,
	ChannelOverwriteUpdate = 14,
	ChannelOverwriteDelete = 15,
	MemberKick = 20,
	MemberPrune = 21,
	MemberBanAdd = 22,
	MemberBanRemove = 23,
	MemberUpdate = 24,
	MemberRoleUpdate = 25,
	MemberMode = 26,
	MemberDisconnect = 27,
	BotAdd = 28,
	RoleCreate = 30,
	RoleUpdate = 31,
	RoleDelete = 32,
	InviteCreate = 40,
	InviteUpdate = 41,
	InviteDelete = 42,
	WebhookCreate = 50,
	WebhookUpdate = 51,
	WebhookDelete = 52,
	EmojiCreate = 60,
	EmojiUpdate = 61,
	EmojiDelete = 62,
	MessageDelete = 72,
	MessageBulkDelete = 73,
	MessagePin = 74,
	MessageUnPin = 75,
	IntegrationCreate = 80,
	IntegrationUpdate = 81,
	IntegrationDelete = 82
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-user-flags
 */
export const enum APIUserFlags {
	DiscordEmployee = 1 << 0,
	DiscordPartner = 1 << 1,
	HypeSquadEvents = 1 << 2,
	BugHunterLevel1 = 1 << 3,
	HypeSquadHouseBravery = 1 << 6,
	HypeSquadHouseBrilliance = 1 << 7,
	HypeSquadHouseBalance = 1 << 8,
	EarlySupporter = 1 << 9,
	TeamUser = 1 << 10,
	System = 1 << 12,
	BugHunterTier2 = 1 << 14,
	VerifiedBot = 1 << 16,
	VerifiedBotDeveloper = 1 << 17
}

/**
 * https://discord.com/developers/docs/resources/user#user-object-premium-types
 */
export const enum PremiumType {
	NitroClassic = 1,
	Nitro
}

/**
 * https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types
 */
export const enum WebhookType {
	Incoming = 1,
	ChannelFollower
}

/**
 * https://discord.com/developers/docs/resources/invite#invite-object-target-user-type
 */
export const enum InviteTargetUserType {
	Stream = 1
}

/**
 * https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum
 */
export const enum TeamMembershipState {
	Invited = 1,
	Accepted
}

/**
 * https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors
 */
export const enum IntegrationExpireBehavior {
	RemoveRole,
	Kick
}

// #endregion Enums

// #region Types
export type EmbedType = 'link' | 'rich' | 'image' | 'video' | 'gifv' | 'article' | 'application_news';

export type APIMessageMentionData = APIUserData & { member?: Omit<APIGuildMemberData, 'user'> };
// #endregion Types

/* eslint-enable no-bitwise */

