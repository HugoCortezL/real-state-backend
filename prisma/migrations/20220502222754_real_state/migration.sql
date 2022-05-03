-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Announcement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `city` VARCHAR(50) NOT NULL,
    `state` VARCHAR(50) NOT NULL,
    `price` DOUBLE NOT NULL,
    `rooms` INTEGER NOT NULL,
    `bathrooms` INTEGER NOT NULL,
    `garage` INTEGER NOT NULL,
    `area` INTEGER NOT NULL,
    `condominium` INTEGER NULL,
    `ipva` INTEGER NULL,
    `furnished` BOOLEAN NOT NULL DEFAULT false,
    `typeId` INTEGER NOT NULL,
    `ownerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `Type_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Additional` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `name` VARCHAR(30) NOT NULL,

    UNIQUE INDEX `Additional_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AdditioinalOnAnnouncement` (
    `additionalId` INTEGER NOT NULL,
    `announcementId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`additionalId`, `announcementId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserFavoritesAnnouncments` (
    `userId` INTEGER NOT NULL,
    `announcementId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `announcementId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Announcement` ADD CONSTRAINT `Announcement_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Announcement` ADD CONSTRAINT `Announcement_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AdditioinalOnAnnouncement` ADD CONSTRAINT `AdditioinalOnAnnouncement_announcementId_fkey` FOREIGN KEY (`announcementId`) REFERENCES `Announcement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AdditioinalOnAnnouncement` ADD CONSTRAINT `AdditioinalOnAnnouncement_additionalId_fkey` FOREIGN KEY (`additionalId`) REFERENCES `Additional`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserFavoritesAnnouncments` ADD CONSTRAINT `UserFavoritesAnnouncments_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserFavoritesAnnouncments` ADD CONSTRAINT `UserFavoritesAnnouncments_announcementId_fkey` FOREIGN KEY (`announcementId`) REFERENCES `Announcement`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
