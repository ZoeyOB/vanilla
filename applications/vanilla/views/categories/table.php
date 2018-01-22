<?php if (!defined('APPLICATION')) return;
$userID = Gdn::session()->UserID;
$categoryID = $this->Category->CategoryID;
?>
    <h1 class="H HomepageTitle"><?php echo $this->data('Title').followButton($this->CategoryModel->isFollowed($userID, $categoryID)); ?></h1>
    <div class="P PageDescription"><?php echo $this->description(); ?></div>
<?php
$this->fireEvent('AfterDescription');
$this->fireEvent('AfterPageTitle');
if (c('Vanilla.EnableCategoryFollowing')) {
    echo '<div class="PageControls Top">';
    echo categoryFilters([['url' => 'http://google.ca', 'active' => true, 'name' => 'All'], ['url' => 'http://google.ca', 'name' => 'Following']]);
    echo '</div>';
}
$categories = $this->data('CategoryTree');
writeCategoryTable($categories);
?>
